const fs = require("fs");
const chalk = require("chalk");
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

const loadContact = () => {
   const readContacts = fs.readFileSync("./data/contacts.json", "utf8");
   const contacts = JSON.parse(readContacts);
   return contacts
}

const simpanContact = (nama, email, noHP) => {
  const contact = { nama, email, noHP };
 
  const contacts = loadContact()

  const duplikatNama = contacts.find((contact) => contact.nama === nama);
  if (duplikatNama) {
    console.log(
      chalk.bgRed.white.bold(
        `Kontak dengan nama ${chalk.bgWhiteBright.blackBright.bold(
          `"${nama}"`
        )} sudah ada. Gunakan nama lain.`
      )
    );
    return false;
  }

  if (email) {
    const isEmail = validator.isEmail(email);
    if (!isEmail) {
      console.log(chalk.red.bold("Format email invalid!"));
      return false;
    }
  }

  const isMobilePhone = validator.isMobilePhone(noHP, "id-ID");
  if (!isMobilePhone) {
    console.log(
      chalk.red.bold(
        `Format No HP ${chalk.bgWhiteBright.blackBright.bold(
          ` ${noHP} `
        )} invalid!`
      )
    );
    return false;
  }

  contacts.push(contact);

  fs.writeFileSync("./data/contacts.json", JSON.stringify(contacts, null, 2));
  console.log("Berhasil menyimpan data.");
};



const listContacts = () => {
  const contacts = loadContact()
  console.log(chalk.bgWhiteBright.bold(` Daftar nama kontak: `))
  contacts.forEach((contact, i) => {
    console.log(`${i+1}. ${contact.nama} -- ${contact.noHP}`)
  })
}

const detailContact = (nama) => {
  const contacts = loadContact()
  const findNama = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase())
  if(!findNama) {
    console.log(chalk.red.bold(`${nama} tidak ada di dalam kontak.`));
    return false;
  }
   console.log(`--${findNama.nama} \n--${findNama.noHP}${findNama.email ? `\n--${findNama.email}` : ""}`);
}


const deleteContact = (nama) => {
  let contacts = loadContact();
  const findNama = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase())
  if(!findNama) {
    console.log(chalk.greenBright.bold(`Gagal menghapus "${nama}", tidak ada di dalam kontak`))
  } 

  contacts = contacts.filter((contact) => contact.nama.toLowerCase() !== nama.toLowerCase())

  fs.writeFileSync("./data/contacts.json", JSON.stringify(contacts, null, 2));
  console.log(`Kontak berdasarkan nama ${chalk.red.bold(nama)} berhasil dihapus.`)
}

module.exports = { simpanContact, listContacts, detailContact, deleteContact };
