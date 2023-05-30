const hewanBuas = ["Harimau", "Singa", "Beruang", "Serigala"];
const hewanJinak = ["Kucing", "Kelinci", "Ayam"];

const perhewanan = () => {
    let animal = [...hewanBuas, ...hewanJinak];
    return animal;
};


const makan = () => {
    let [Ikan, Wortel, Biji] = hewanJinak;
    console.log(Ikan);
    console.log(Wortel);
    console.log(Biji);
};

console.log(perhewanan())

setTimeout(() => {
    makan();
},5000);



