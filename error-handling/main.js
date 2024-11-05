// const error = new Error("Terjadi error cuy!");
// console.log(error);

// const price = 100;
// const paid = 80;
//
// if (paid < price) {
//   throw new Error("Pembayaran kurang!");
// }

// try {
//   console.log("Memulai program");
//   throw new Error("Error: Program berhenti");
//   console.log("Mengakhiri program");
// } catch (err) {
//   console.log("Karena terjadi error, blok ini akan dieksekusi");
// }

// Blok finally akan selalu dieksekusi, terlepas dari error atau tidak
try {
  console.log("Ini blok try");
  throw new Error("Terjadi error");
} catch (err) {
  console.log("Ini blok catch");
} finally {
  console.log("Ini blok finally");
}
