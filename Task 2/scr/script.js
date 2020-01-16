const resultPrompt = prompt('Введите число: ');

if (resultPrompt < 5) {
    alert('Вы ввели слишком маленькое число');
} else {
    for(let i = 0; i <= resultPrompt; i++){
        console.log (i);
    }
}