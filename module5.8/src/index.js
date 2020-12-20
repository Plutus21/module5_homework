let group = new Map([
    ["James", "vocal"],
    ["Kirk", "solo-guitar"],
    ["Lars", "drums"],
    ["Robert", "bas-guitar"]
]);

group.forEach(function (item,index) {
    console.log(`Ключ: ${index}, значение: ${item}`)
})
