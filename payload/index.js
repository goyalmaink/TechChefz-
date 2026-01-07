import xlsx from "xlsx";
import fs from 'fs'
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

fs.writeFileSync(
    "payload.json",
    JSON.stringify(payload, null, 2),
    "utf-8"
);

console.log("Total Records:", payload.length);
console.log("----------------------------")
// console.log(payload);
console.log(JSON.stringify(payload, null, 2));
