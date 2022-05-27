// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

/** todo Monica property */
const arrColorMonica = ["Yellow", "Pink", "White", "Purple"];
const arrRestoMonica = ["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"];

let setColorMonica = new Set(arrColorMonica);
let setRestoMonica = new Set(arrRestoMonica);

const educationMonica = [
  { name: "SD 01", city: "Jakarta", graduate: "2016" },
  { name: "SMP 02", city: "Jakarta", graduate: "2019" },
  { name: "SMA 03", city: "Tangerang" },
];

/** todo Sandi Property */
const arrColorSandi = ["Blue", "White", "Red"];
const arrRestoSandi = ["Sate", "Soto", "Sosis", "Kue", "Rujak", "Mie", "Kaldu", "Ramen", "Ote-ote"];

let setColorSandi = new Set(arrColorSandi);
let setRestoSandi = new Set(arrRestoSandi);

const educationSandi = [
  { name: "SDN 1", city: "Sumenep", graduate: "2007" },
  { name: "MTsN 2", city: "Sumenep", graduate: "2013" },
  { name: "MAN 1", city: "Sumenep", graduate: "2019" },
  { name: "Universitas Trunojoyo", city: "Bangkalan" },
];

/** todo data input */

//monica
const firstUser = {
  name: "Monica",
  gender: "Female",
  age: 17,
  email: "monica@dingdong.com",
  favoriteColor: [...setColorMonica],
  isHavePet: "Yes",
  education: educationMonica,
  favoriteRestaurant: [...setRestoMonica],
};

// sandi
const secondUser = {
  name: "Sandi Prayogo",
  gender: "Male",
  age: 20,
  email: "sandi@dingdong.com",
  favoriteColor: [...setColorSandi],
  isHavePet: "No",
  education: educationSandi,
  favoriteRestaurant: [...setRestoSandi],
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser);
users.push(secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
  console.log(users.length || users.size);
  console.log(users);
}

main();

module.exports = {
  users,
};
