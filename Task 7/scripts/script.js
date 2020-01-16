const sum = (firstNumber, secondNumber) =>  firstNumber + secondNumber;

const difference = (firstNumber, secondNumber) =>  firstNumber - secondNumber;

const pow = (firstNumber, secondNumber) =>  firstNumber * secondNumber;

const division = (firstNumber, secondNumber) =>  firstNumber / secondNumber;

const firstNumber = +prompt('Введите 1-ое число: ');
const secondNumber = +prompt('Введите 2-ое число: ');

alert (`${firstNumber} + ${secondNumber} = ${sum(firstNumber, secondNumber)}`);
alert (`${firstNumber} - ${secondNumber} = ${difference(firstNumber, secondNumber)}`);
alert (`${firstNumber} * ${secondNumber} = ${pow(firstNumber, secondNumber)}`);
alert (`${firstNumber} / ${secondNumber} = ${division(firstNumber, secondNumber)}`);
