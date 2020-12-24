let num = prompt('Введите значение: ');

num =+ num;
let flag = false;


if ((typeof num === 'number') && (num !== NaN)) {
    flag = true
    if ((flag = true) && ((num % 2) === 0)) {
        console.log('Число четное')
    } else if ((flag === true) && ((num % 2 - 1) === 0)) {
        console.log('Число нечетное')
    } else if (flag) {
        console.log('Упс, кажется, вы ошиблись')
    }
}


