let sum = (a, b) => {return a + b;}

let difference = (a, b) => {return a - b;}

let pow = (a, b) => {return a * b;}

let division = (a, b) => {return a / b;}

const a = +prompt('Введите a: ');
const b = +prompt('Введите b: ');

alert (`a + b = ${sum(a, b)}`);
alert (`a - b = ${difference(a, b)}`);
alert (`a * b = ${pow(a, b)}`);
alert (`a / b = ${division(a, b)}`);


