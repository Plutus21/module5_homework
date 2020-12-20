let num = prompt('Введите значение: ');

num =+ num;

if(num % 2 === 0) {
    console.log('Число четное')
} else if (num = "NaN") {
    console.log('Not-a-number')
} else if (typeof(num) !== 'number') {
    console.log('Упс, кажется, вы ошиблись')
} else {
    console.log('Число нечетное')
}
