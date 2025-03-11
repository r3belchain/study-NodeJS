const fs = require("fs");
const chalk = require('chalk')
const validator = require("validator");

// membuat folder jika tidak ada foldernya
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

//membuat file jika belum ada
const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

// const tulisPertanyaan = (pertanyaan) => {
//   return new Promise((resolve, reject) => {
//     rl.question(pertanyaan, (nama) => {
//       resolve(nama);
//     });
//   });
// };

const simpanContact = (nama, email, noHP) => {
  const contact = { nama, email, noHP };
  const readContacts = fs.readFileSync("./data/contacts.json", "utf8");
  const contacts = JSON.parse(readContacts);

  const duplikatNama = contacts.find(contact => contact.nama === nama)
  if(duplikatNama) {
    console.log(chalk.bgRed.white.bold(`Kontak dengan nama ${chalk.bgWhiteBright.blackBright.bold(`"${nama}"`)} sudah ada. Gunakan nama lain.`))
    return false;
  }

  if(email) {
     const isEmail = validator.isEmail(email);
     if (!isEmail) {
       console.log(chalk.red.bold("Format email invalid!"));
       return false;
     }
  }
 

  const isMobilePhone = validator.isMobilePhone(noHP, "id-ID")
  if(!isMobilePhone) {
    console.log(chalk.red.bold(`Format No HP ${chalk.bgWhiteBright.blackBright.bold(` ${noHP} `)} invalid!`))
    return false
  }


  contacts.push(contact);

  fs.writeFileSync("./data/contacts.json", JSON.stringify(contacts, null, 2));
  console.log("Berhasil menyimpan data.");
};

module.exports = { simpanContact };
