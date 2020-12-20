let x = false;

if(typeof(x) === 'number') {
    console.log("Х - число")
} else if(typeof(x) === 'string') {
    console.log("Х - строка")
} else if(typeof(x) === 'boolean') {
    console.log("Х - логический тип данных")
} else {
    console.log("Тип данных не определен")
}