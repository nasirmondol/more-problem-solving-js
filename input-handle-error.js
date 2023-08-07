function add(num1, num2) {
    if (typeof num1 !== Number || typeof num2 !== Number) {
        // console.log('Please type a valid number');
    }
    return num1 + num2;
}

const addtwoNumber = add(30 * 10)
// console.log(addtwoNumber);

let sum = 0;
for (let i = 0; i <= 3; i++) {
    sum = sum + i;
    
}
console.log(sum);
