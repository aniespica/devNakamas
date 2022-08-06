// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { db } from "../../lib/db";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { hostUser, currentPackage } = JSON.parse(req.body);
        
        let sql = "SELECT * FROM salesforce.contact WHERE email = $1";
        const { rows } = await db.query(sql, [hostUser.email]);
        const date = currentPackage.frame.auctifera__date__c.split("T")[0].split("-");
        const endTime = currentPackage.frame.auctifera__end_time__c.split(":");
        const startTime = currentPackage.frame.auctifera__start_time__c.split(":");
        const endDate = new Date(Date.UTC(date[0], date[1] - 1, date[2], endTime[0], endTime[1]));
        const startDate = new Date(Date.UTC(date[0], date[1] - 1, date[2], startTime[0], startTime[1]));

        if (rows.length === 0 ) {
            sql = `INSERT INTO salesforce.contact (Email, FirstName, HomePhone, LastName,Phone) VALUES ('${hostUser.email}', '${hostUser.firstName}','${hostUser.homePhone}','${hostUser.lastName}','${hostUser.mobilePhone}');`;
            await db.query(sql);
        } else {
            sql = `UPDATE salesforce.contact SET firstname = '${hostUser.firstName}', lastname = '${hostUser.lastName}', homephone = '${hostUser.homePhone}', phone = '${hostUser.mobilePhone}' WHERE email = '${hostUser.email}';`;
            await db.query(sql);
        }

        sql = `INSERT INTO salesforce.Auctifera__Rental_Event__c(Auctifera__Package__c,Auctifera__Event_Start_Date_and_Time__c,Auctifera__Event_End_Date_and_Time__c,Auctifera__Client_Contact__c) 
              VALUES ('${currentPackage.sfid}','${startDate.toISOString()}','${endDate.toISOString()}','${rows[0].sfid}');`;

        const result = await db.query(sql);
    }
}
