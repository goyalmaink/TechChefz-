import fs from "fs";

const payload1 = JSON.parse(fs.readFileSync("oldpayload.json", "utf-8"));
const payload2 = JSON.parse(fs.readFileSync("newpayload.json", "utf-8"));

const phoneSet = new Set(
    payload1.map(item => item.phone.toString())
);

const deltaPayload = payload2.filter(item => {
    const phone = item.phone.toString();
    return !phoneSet.has(phone);
});

fs.writeFileSync(
    "FinalPayload.json",
    JSON.stringify(deltaPayload, null, 2),
    "utf-8"
);

