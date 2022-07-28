// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
  name: "ANDIKA",
  gender: "male",
  age: 10,
  email: "andika@dingdong.com",
  favoriteColor: ["Yellow", "Pink", "White", "Purple"],
  isHavePet: "Yes",
  education: [{ name: "SD 01", city: "Sumenep" }],
  favoriteRestaurant: [
    "Bento",
    "Sushi",
    "Pancake",
    "Eggy",
    "Tempura",
    "Padang",
    "Tteok",
  ],
};
const secondUser = {
  name: "SANDI",
  gender: "Male",
  age: 20,
  email: "sandi@dingdong.com",
  favoriteColor: ["Blue", "Black", "Red"],
  isHavePet: "No",
  education: [
    { name: "SDN 1", city: "Sumenep", graduate: "2013" },
    { name: "MTsN", city: "Sumenep", graduate: "2016" },
    { name: "MAN", city: "Sumenep", graduate: "2019" },
    { name: "UTM", city: "Bangkalan" },
  ],
  favoriteRestaurant: [
    "Tempura",
    "Bento",
    "Sushi",
    "Padang",
    "Katsu",
    "Geprek",
    "Pancake",
    "Eggy",
  ],
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
  console.log(users.length || users.size);
  console.log(users);
}

main();

module.exports = {
  users,
};
