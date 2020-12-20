let arr = [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'str'];

let even = 0;
let odd = 0;
let zero = 0;
let anyElements = 0;

for(i = 0; i < arr.length; i++) {
    if((arr[i]) % 2 === 0) {
        even++;
    } else if(arr[i] === 0) {
        zero++;
    } else if (typeof(arr[i]) !== 'number') {
        anyElements++;
    } else {
        odd++;
    }
}

console.log("Even: " + even);
console.log("Odd: " + odd);
console.log("Zero: " + zero);
console.log("Не цифры: " + anyElements);
