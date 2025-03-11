function cetakNama(nama) {
  return `Halo nama saya ${nama}`;
}

const PI = 3.14;

class Orang {
  constructor() {
    console.log(`Objek orang telah dibuat`);
  }
}

const mahasiswa = {
  nama: "Rebel The Matrix",
  umur: 12,
  cetakMhs() {
    return `Halo, nama saya ${this.nama} dan umur saya ${this.umur}`;
  },
};

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

module.exports = {
  cetakNama,
  PI,
  mahasiswa,
  Orang,
};
