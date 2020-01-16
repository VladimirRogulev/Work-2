const resultPrompt = +prompt('Выберите один из пунктов:\n1. Автомобиль\n2. Мотоцикл\n3. Велосипед');

switch (resultPrompt){
    case 1: 
        alert('Автомобиль!');
        break;
    case 2:
        alert('Мотоцикл!');
        break;
    case 3:
        alert('Велосипед!');
        break;
    default:
        alert('Такого варианта нет!');
    
}