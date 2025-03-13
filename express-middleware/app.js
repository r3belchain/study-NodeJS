const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const morgan = require("morgan");
const app = express();
const port = 3000;

// gunakan ejs
app.set("view engine", "ejs");
//Third-party middleware
app.use(expressLayouts);
app.use(morgan("dev"));

//Built-in middleware static (untuk menampilkan file-file static seperti css, img, .js)
app.use(express.static("public"));

//Application level middleware
app.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

app.get("/", (req, res) => {
  // res.sendFile('./index.html', {root: __dirname})
  const mahasiswa = [
    {
      nama: "Rebel",
      email: "rebel@gmail.com",
    },
    {
      nama: "Hanum",
      email: "sanum@gmail.com",
    },
    {
      nama: "Syai",
      email: "syai@gmail.com",
    },
  ];

  res.render("index", {
    nama: "Rebel",
    title: "Halaman Home",
    mahasiswa,
    layout: "layouts/main-layout",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "Halaman About",
    layout: "layouts/main-layout",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Halaman Contact",
    layout: "layouts/main-layout",
  });
});

app.get("/product/:id", (req, res) => {
  res.send(
    `Produk ID : ${req.params.id} <br> Category ID : ${req.query.category}`
  );
});

app.use((req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
