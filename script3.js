//Crie uma string que contenha o dia de hoje, exemplo:  '20/07/2019';

let date = new Date();

let currentDay = date.getDate();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();

console.log(`${currentDay}/${currentMonth}/${currentYear}`);


let diaDeHoje = `29/10/2019`;

diaDeHoje.slice(`/`);
console.log(diaDeHoje);