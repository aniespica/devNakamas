import { db } from "../../lib/db";

export default async function handler(req, res) {
    if (req.method === "GET") {
        const { currentDate, category, frame, capacity } = req.query;

        const partDate = currentDate.split("-");
        const currentDateTime = new Date(
            Date.UTC(
                parseInt(partDate[0], 10),
                parseInt(partDate[1] - 1, 10),
                parseInt(partDate[2], 10),
                0,
                0,
                0
            )
        );

        let sql = `SELECT * FROM salesforce.Auctifera__Rental_Event__c WHERE recordtypeid = '01217000005hGnIAAU' AND Auctifera__Event_End_Date_and_Time__c >= '${currentDateTime.toISOString()}' AND Auctifera__Event_Start_Date_and_Time__c <= '${currentDateTime.toISOString()}'`;

        if (category && category != "null") {
            sql += ` AND Auctifera__Category__c LIKE '%${category}%'`;
        }

        if (capacity && capacity != "null") {
            sql += ` AND Auctifera__Chosen_Location_s_Capacity__c >= ${capacity}`;
        }

        const { rows } = await db.query(sql);

        if (rows.length === 0) {
            res.statusCode = 200;
            res.json(rows);
            return;
        }

        const packageIds = {};
        rows.forEach((row) => (packageIds[row.sfid] = row));

        sql = `SELECT * FROM salesforce.Auctifera__Frame__c WHERE Auctifera__Rental_Event_Group_Template__c IN ('${Object.keys(
            packageIds
        ).join("','")}')  AND auctifera__date__c = '${currentDate}'`;

        if (frame != "null") {
            sql += ` AND auctifera__start_time__c >= '${
                frame.split(",")[0]
            }' AND auctifera__end_time__c <= '${frame.split(",")[1]}'`;
        }

        const { rows: frames } = await db.query(sql);

        if (frames.length === 0) {
            res.statusCode = 200;
            res.json(frames);
            return;
        }

        const frameIds = {};
        frames.forEach((frame) => {
            if (
                frameIds[frame.auctifera__rental_event_group_template__c] ===
                undefined
            ) {
                frameIds[frame.auctifera__rental_event_group_template__c] = [
                    frame,
                ];
            } else {
                frameIds[frame.auctifera__rental_event_group_template__c].push(
                    frame
                );
            }
        });

        Object.keys(frameIds).forEach((sfPackageId) => {
            packageIds[sfPackageId].frames = frameIds[sfPackageId];
        });

        res.statusCode = 200;
        res.json(packageIds);

    } else {
        res.statusCode = 405;
        res.json({
            error: "Method Not Allowed",
        });
    }
}
