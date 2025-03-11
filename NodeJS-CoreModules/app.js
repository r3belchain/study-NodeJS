// Core Module -- File System

const fs = require('fs');


//menuliskan string ke file secara (synchronous)

// try {
//   fs.writeFileSync('test.txt', "Hellow world secara synchronous");
// } catch (e) {
//   console.log("Error writing test.txt", e)
// }


//menuliskan string ke file secara (asynchronous)

// fs.writeFile('test.txt', "Hello world secara asynchronous", (err) => {
//   if (err) throw err;
//   console.log("The file has been saved!");
// });



//membaca isi file ke file secara (synchronous)
// const readFile = fs.readFileSync('test.txt', 'utf8');
// console.log(readFile)


//membaca isi file ke file secara (Asynchronous)
// fs.readFile('test.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });


//Readline
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan nama anda: ", (nama) => {
  rl.question("Masukkan nomor anda: ", (nomor) => {
    const message = {nama, nomor}
    const readContact =  fs.readFileSync("contact/test.json", "utf8")
    const ubah = JSON.parse(readContact)
    

    ubah.push(message)
    
    fs.writeFileSync("contact/test.json", JSON.stringify(ubah, null, 2))

    console.log("Berhasil menyimpan data");
      rl.close();
    })});


