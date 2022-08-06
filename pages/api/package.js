import { db } from "../../lib/db";

export default async function handler(req, res) {
    if (req.method === "GET") {
        const { currentDate, category, frame, capacity } = req.query;

        const partDate = currentDate.split("-");
        const currentDateTime = new Date(Date.UTC(parseInt(partDate[0],10), parseInt(partDate[1] - 1,10), parseInt(partDate[2],10),0,0,0));
        
        let sql = `SELECT * FROM salesforce.Auctifera__Rental_Event__c WHERE recordtypeid = '01217000005hGnIAAU' AND Auctifera__Event_End_Date_and_Time__c >= '${currentDateTime.toISOString()}' AND Auctifera__Event_Start_Date_and_Time__c <= '${currentDateTime.toISOString()}'`;

        if (category != 'null') {
            sql += ` AND Auctifera__Category__c = '${category}'`;
        }

        const { rows } = await db.query(sql);

        if (rows.length === 0) {
            res.statusCode = 200;
            res.json(rows);
            return;
        }

        const packageIds = {};
        rows.forEach(row => packageIds[row.sfid] = row);

        if (rows.length > 0 && capacity != 'null') {
            
            sql = `SELECT * FROM salesforce.Auctifera__Rental_Resources__c WHERE Auctifera__Rental_Event__c IN ('${Object.keys(packageIds).join("','")}') AND Auctifera__Location_Capacity__c >= ${capacity}`;
            const { rows: packageResources } = await db.query(sql);
            console.log('packageResource',packageResources);
        }

        // if (rows.length > 0 && frame != 'null') {
        //     sql = `SELECT * FROM salesforce.Auctifera__Frame__c WHERE Auctifera__Rental_Event_Group_Template__c IN ('${Object.keys(packageIds).join("','")}' AND auctifera__end_time__c >= '${frame[1]}' AND auctifera__start_time__c <= '${frame[0]}' `;
        //     const { rows: frames } = await db.query(sql);
        //     console.log('frames',frames);
        // }


        res.statusCode = 200;;
        res.json(rows);

    } else {
        res.statusCode = 405;
        res.json({
            error: "Method Not Allowed",
        });
    }
}
