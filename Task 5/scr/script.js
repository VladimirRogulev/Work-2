function sum (a, b){
    return a + b;
}

function difference (a, b){
    return a - b;
}

const a = +prompt('Введите a: ');
const b = +prompt('Введите b: ');

alert (`a + b = ${sum(a, b)}`);
alert (`a - b = ${difference(a, b)}`);


