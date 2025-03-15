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

// menuliskan / menimpa file contacts.json dengan data yang baru
const saveContacts = (contacts) => {
  fs.writeFileSync(
    "data/contacts.json",
    JSON.stringify(contacts, null, 2),
    "utf-8"
  );
};

// menambahkan dara contact baru
const addContact = (contact) => {
  const contacts = loadContact();
  contacts.push(contact);
  saveContacts(contacts);
};


//cek nama yang duplikat
const cekDuplikat = (nama) => {
  const contacts = loadContact();
  return contacts.find((contact) => contact.nama === nama) 
}

//hapus kontak
const deleteContact = (nama) => {
  const contacts = loadContact();
  const filteredContacts = contacts.filter((contact) => contact.nama !== nama);
  saveContacts(filteredContacts);
}

//mengubah contacts
const updateContacts = (contactBaru) => {
  const contacts = loadContact();
  //hilangkan contact lama yang namanya sama dengan oldNama
  const filteredContacts = contacts.filter((contact) => contact.nama !== contactBaru.oldNama)
  delete contactBaru.oldNama;
  filteredContacts.push(contactBaru)
  saveContacts(filteredContacts);
}


module.exports = { loadContact, findContact, addContact, cekDuplikat, deleteContact, updateContacts };
