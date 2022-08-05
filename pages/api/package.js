import {db} from '../../../lib/db';

export default async function handler(req, res) {

    if (req.method === 'GET') {
        const {category} = req.query;
        const {rows} = await db.query(`SELECT  FROM Auctifera__Rental_Event__c WHERE Auctifera__Category__c LIKE $1`, [category]);
        res.statusCode = 200;
        res.json(rows[0]);
    } else {
        res.statusCode = 405;
        res.json({
            error: 'Method Not Allowed'
        });
    }
}