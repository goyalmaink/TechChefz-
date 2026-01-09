import xlsx from "xlsx";
import fs, { writeFileSync } from 'fs'

const data = xlsx.readFile("platform.xlsx");

const sheetName = data.SheetNames[0];
const sheet = data.Sheets[sheetName];

export const excelData = xlsx.utils.sheet_to_json(sheet, {
    defval: "",
});

const payload = excelData
    .filter(row => row["Mobile Phone"] && row["Mobile Phone"].toString().trim() !== "")
    .map(row => ({
        code: row["Parent Code"],
        fname: row["First Name"],
        scname: row["Last Name"],
        phone: row["Mobile Phone"],
        email: row["Primary Email"]
    }));


// fs.writeFileSync("payload.json", JSON.stringify(payload, null, 2), "utf-8");

// console.log("Total Records:", payload.length);
// console.log(payload);
// console.log(JSON.stringify(payload, null, 2));
// console.log(JSON.stringify(payload));

// payload.forEach(item => {
//   console.log(`"${item.code}" "${item.phone}"`);
// });

const  quotesdata  = payload.map(data=>({
    code:`${data.code}`,
    phone:`${data.phone}`

}))


// console.log("Converting string data to quotes data", quotesdata)
// console.log("Using json stringigy method")
// console.log(JSON.stringify(quotesdata, null, 2));


const finaldata=  payload.map(data =>({
    code:`${data.code}`,
    fname:data.fname,
    lname:data.scname,
    email:data.email,
    mobile:`${data.phone}` 
}))

console.log("Total Records:", finaldata.length);
console.log("Final complete data with quotes ")
console.log(JSON.stringify(finaldata, null, 2));

// Write final data to a JSON file
fs.writeFileSync("oldpayload.json",JSON.stringify(finaldata, null, 2), "utf-8");