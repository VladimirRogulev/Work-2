let pow = function(a, b){
    return a * b;
}

let division = function(a, b){
    return a / b;
}

const a = +prompt('Введите a: ');
const b = +prompt('Введите b: ');

alert (`a * b = ${pow(a, b)}`);
alert (`a / b = ${division(a, b)}`);


