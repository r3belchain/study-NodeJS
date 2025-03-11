const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // res.send("Hello World!");

  // res.json({
  //   nama: 'rebel',
  //   email: 'rebel@gmail.com',
  //   noHP: '08768656754'
  // })

  res.sendFile('./index.html', {root: __dirname})
});

app.get("/about", (req, res) => {
  // res.send("Ini adalah halaman About!");
  res.sendFile("./about.html", { root: __dirname });
});

app.get("/contact", (req, res) => {
  // res.send("Ini adalah halaman Contact!");
  res.sendFile("./contact.html", { root: __dirname });
});

app.get('/product/:id', (req, res) => {
  res.send(`Produk ID : ${req.params.id} <br> Category ID : ${req.query.category}`);
})

app.use('/', (req, res) => {
  res.status(404);
  res.send("<h1>404</h1>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});








// const fs = require("fs");
// const http = require("http");
// const port = 3000;

// const renderHTML = (path, res) => {
//   fs.readFile(path, (err, data) => {
//     if (err) {
//       res.writeHead(404);
//       res.write("Error: file not found");
//     } else {
//       res.write(data);
//     }
//     res.end();
//   });
// };

// http
//   .createServer((req, res) => {
//     res.writeHead(200, {
//       "Content-Type": "text/html",
//     });
//     const url = req.url;
//     switch (url) {
//       case "/about":
//         renderHTML("./about.html", res);
//         break;
//       case "/contact":
//         renderHTML("./contact", res);
//         break;
//       default:
//         renderHTML("./index.html", res);
//         break;
//     }
//   })
//   .listen(port, () => {
//     console.log(`Server is listening on port ${port}`);
//   });
