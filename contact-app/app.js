const yargs = require("yargs");
const { simpanContact, listContacts, detailContact, deleteContact } = require("./contact");

yargs
  .command({
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
  })
  .demandCommand();

yargs.command({
  command: "list",
  desc: "Menampilkan semua nama & nomor HP di dalam kontak",
  handler() {
    listContacts();
  },
});

yargs.command({
  command: "detail",
  desc: "Menampilkan detail sebuah contact berdasarkan nama",
  builder: {
    nama: {
        describe: "Nama lengkap",
        demandOption: true,
        type: "string",
      },
  },
  handler(argv) {
    detailContact(argv.nama);
  },
});

yargs.command({
  command: "delete",
  desc: "Menghapus sebuah contact berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
   deleteContact(argv.nama);
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
