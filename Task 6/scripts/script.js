const pow = function(firstNumber, secondNumber){
    return firstNumber * secondNumber;
}

const division = function(firstNumber, secondNumber){
    return firstNumber / secondNumber;
}

const firstNumber = +prompt('Введите 1-ое число: ');
const secondNumber = +prompt('Введите 2-ое число: ');

alert (`${firstNumber} * ${secondNumber} = ${pow(firstNumber, secondNumber)}`);
alert (`${firstNumber} / ${secondNumber} = ${division(firstNumber, secondNumber)}`);
