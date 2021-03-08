//import {DBFFile} from 'dbffile';
const {DBFFile} = require('dbffile');
 
async function testRead() {
    try {
        let dbf = await DBFFile.open('Transcat_carretera_perill_trams.dbf');
        console.log(`DBF file contains ${dbf.recordCount} records.`);
        console.log(`Field names: ${dbf.fields.map(f => f.name).join(', ')}`);
        let records = await dbf.readRecords(100)
        //for (let record of records) console.log(records);
    } catch(e) {
        console.log("Error: "+e);
    }
}

   testRead();