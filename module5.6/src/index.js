let arr = ['str', 'strr'];

let check = (new Set(arr)).size !== arr.length;
console.log(check);