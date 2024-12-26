class Orang {
  constructor(nama, umur) {
    this.nama = nama;
    this.umur = umur;
    console.log("Orang berhasil dibuat!");
  }

  tampilkanInfo() {
    console.log(`Nama: ${this.nama}`);
    console.log(`Umur: ${this.umur}`);
  }
}

const pumbah = new Orang("Pumbah", 12);
pumbah.tampilkanInfo();
