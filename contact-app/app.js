const yargs = require("yargs");
const { simpanContact } = require("./contact");

yargs.command({
  command: "add",
  desc: "Menambahkan kontak baru",
  builder: {
    nama: {
      describe: "Nama lengkap",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "Email",
      demandOption: false,
      type: "string",
    },
    noHP: {
      describe: "Nomor HP",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    simpanContact(argv.nama, argv.email, argv.noHP);
  },
});

yargs.parse();

// const {simpanContact, tulisPertanyaan} = require('./contact')

// // metode async-await (lebih efisien dan mudah dibaca)
// const main = async () => {
//   const nama = await tulisPertanyaan("Masukkan nama anda : ");
//   const email = await tulisPertanyaan("Masukkan email anda : ");
//   const noHP = await tulisPertanyaan("Masukkan no HP anda : ");

//   simpanContact(nama, email, noHP)
// }

// main()

// metode callback (terlalu banyak nested callback / callback hell)

// rl.question("Masukkan nama anda: ", (nama) => {
//   rl.question("Masukkan nomor anda: ", (nomor) => {
//     const message = { nama, nomor };
//     const readContact = fs.readFileSync("./data/contacts.json", "utf8");
//     const ubah = JSON.parse(readContact);

//     ubah.push(message);

//     fs.writeFileSync("./data/contacts.json", JSON.stringify(ubah, null, 2));
//     console.log("Berhasil menyimpan data.");
//     rl.close();
//   });
// });
