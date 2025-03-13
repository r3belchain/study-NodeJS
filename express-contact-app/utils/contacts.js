const fs = require("fs");

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

const loadContact = () => {
  const readContacts = fs.readFileSync("data/contacts.json", "utf8");
  const contacts = JSON.parse(readContacts);
  return contacts;
};

const findContact = (nama) => {
  const contacts = loadContact();
  return contacts.find(
    (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
  );
};

module.exports = { loadContact, findContact };
