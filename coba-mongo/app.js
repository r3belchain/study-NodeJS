const { MongoClient, ObjectId } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";

const dbName = "wpu";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((error, client) => {
  if (error) {
    return console.log("Koneksi gagal");
  }
  // pilih database
  const db = client.db(dbName);
   const mahasiswa = db.collection("mahasiswa");
  // Menambahkan 1 data ke collection mahasiswa
  // db.collection('mahasiswa').insertOne({
  //   nama: 'John',
  //   email: 'john@example.com',
  // }, (err, result) => {
  //   if(err) {
  //     return console.log("Insert gagal", err);
  //   }
  //   console.log("Insert berhasil", result);
  // })

  // Menambahkan lebih dari 1 data ke collection

  // db.collection("mahasiswa").insertMany([
  //   {
  //     nama: "Alice",
  //     email: "alice@example.com",
  //   },
  //   {
  //     nama: "Bob",
  //     email: "bob@example.com",
  //   },
  // ], (err, result) => {
  //   if(err) {
  //     return console.log("Insert gagal", err);
  //   }
  //   console.log("Insert berhasil", result.insertedCount);
  // });

  // Menampilkan dat berdasarkan kriteriaa yang ada di collection 'mahasiswa'
  // db.collection("mahasiswa")
  //   .find({ nama: "Bob" })
  //   .toArray((error, result) => {
  //     if (error) {
  //       return console.log("Mengambil data gagal", error);
  //     }
  //     result.forEach((doc) => {
  //       console.log(doc);
  //     });
  //   });

  // Mengubah data berdasarkan id
  mahasiswa.updateOne(
    {
      _id: new ObjectId("67d6c5771482980265e1d9a2"),
    },
    {
      $set: {
        nama: "John Doe",
      },
    }
  );
});
