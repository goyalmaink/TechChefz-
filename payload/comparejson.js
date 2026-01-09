import fs from 'fs'

const json1 = JSON.parse(fs.readFileSync('oldpayload.json', 'utf-8'))
const json2 = JSON.parse(fs.readFileSync('newpayload.json', 'utf-8'))
// console.log("length of json1", json1.length)
// console.log("length of json2", json2.length)

// function compareJSON(json1, json2) {
//     // if (json1.length !== json2.length) {
//     //     return false;
//     // }

//     for (let i = 0; i < json1.length; i++) {
//         const obj1 = json1[i];
//         const obj2 = json2[i];

//         const keys1 = Object.keys(obj1);
//         const keys2 = Object.keys(obj2);

//         if (keys1.length !== keys2.length) {
//             return false;
//         }

//         for (const key of keys1) {
//             if (obj1[key] !== obj2[key]) {
//                 return false;
//             }
//         }
//     }

//     return true;
// }
// compareJSON(json1, json2) ?
//     console.log('The two JSON files are identical.') : console.log('The two JSON files are different.')

// const nameslist = [
//     "Nusraat Sultanaa",
//     "RATHEES KUMAR",
//     "Xavier",
//     "MANIMARAN",
//     "Jabishetty",
//     "BHEEMBAHADUR",
//     "Ramanand",
//     "D G",
//     "CHANDRASHEKHAR",
//     "Ravindra Sapkale",
//     "GAJANAN",
//     "DHANANJAY",
//     "Sai",
//     "VELPUR KRANTHI",
//     "DINESH",
//     "MUNIRAJ",
//     "AMIT",
//     "VISHAL",
//     "RAGHAV RAMANA",
//     "Vinoth",
//     "MOTAKATLA",
//     "SAMBASIVA",
//     "BASKARAN",
//     "JAYAKUMAR",
//     "ARUKUMAR",
//     "VELAN",
//     "SUNIL",
//     "KARTIK",
//     "Sudhir",
//     "ANISH",
//     "Keval",
//     "Mayursinh",
//     "Alay Hirenbhai",
//     "Ravikumar",
//     "Tulsi Prasad",
//     "SOWMYA",
//     "Gunjan Vijaybhai",
//     "Nirali"
// ]
// console.log("Total names in the list:", nameslist.length)

const phonelist = [
    "7867019831",
    "7867019835",
    "9944723062",
    "7867015267",
    "9989022555",
    "9885201685",
    "9962936655",
    "9154906201",
    "8888888831",
    "9730659427",
    "9422044599",
    "8275348869",
    "9555899999",
    "8143832455",
    "9543213030",
    "8220013431",
    "9423775711",
    "77985322012",
    "9443041584",
    "7598707782",
    "8121004555",
    "9000096593",
    "9500023907",
    "9994008002",
    "9443237512",
    "9159566690",
    "9972001047",
    "8088016816",
    "9608307499",
    "9996639619",
    "9925008142",
    "7486028313",
    "8141334508",
    "6359849735",
    "9591957677",
    "9620100007",
    "9879405833",
    "8511414002",
    "9436143671",
    "7005983041",
    "9965293949",
    "7397768012",
    "9750000000",
    "9042798400",
    "9448547952",
    "8105775792",
    "9934012273",
    "7283001749",
    "9701651555",
    "8519979623",
    "9177778707",
    "8712012145",
    "9902008363",
    "9632895043",
    "9898484500",
    "9913977788",
    "9552058239",
    "7004017178",
    "8092725173",
    "8210103085",
    "7872315655",
    "9348521874",
    "9898484500",
    "9913977788"
]
console.log("Total phones in the list:", phonelist.length)
function printonlynamepayload(json2) {
    let count = 0;
    const phonenumber = new Set()
    for (const item of json2) {
        if (phonelist.includes(item.phone) && !phonenumber.has(item.phone)) {
            phonenumber.add(item.phone);
            count++;
            console.log(item);
            fs.writeFileSync("checkingpayload.json", JSON.stringify(item, null, 2));
        }

    }
    console.log("Total count of phones found:", count);
}
printonlynamepayload(json2)