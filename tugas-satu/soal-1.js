const biodata = {
  nama: "Riyanda Ramadhan",
  nim: "02042111026",
  email: "ryanda.rama10@gmail.com",
};

let { nama, nim, email } = biodata;
console.log("nama : " + nama);
console.log("nim : " + nim);
console.log("email : " + email);

let arraysatu = ["Anggi", "Fadli"];
let arraydua = ["Agus", "Toyyib"];
let arraytiga = ["Kurniawan", "Dimas"];

let arrayjoin = [...arraysatu,...arraydua,...arraytiga]

console.log(arrayjoin)