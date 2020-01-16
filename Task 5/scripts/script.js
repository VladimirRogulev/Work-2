function sum (firstNumber, secondNumber){
    return firstNumber + secondNumber;
}

function difference (firstNumber, secondNumber){
    return firstNumber - secondNumber;
}

const firstNumber = +prompt('Введите 1-ое число: ');
const secondNumber = +prompt('Введите 2-ое число: ');

alert (`${firstNumber} + ${secondNumber} = ${sum(firstNumber, secondNumber)}`);
alert (`${firstNumber} - ${secondNumber} = ${difference(firstNumber, secondNumber)}`);
