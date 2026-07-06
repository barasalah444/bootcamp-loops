
console.log("--- 1. Print Numbers 1 to 10 ---");
for (var i = 1; i <= 10; i++) {
    console.log(i);
} 
//------------
console.log("\n--- 2. Reverse Counting 10 to 1 ---");
for (let i = 10; i >= 1; i--) {
   console.log(i);
}

console.log("\n--- 3. Even Numbers between 1 and 20 ---");
for (var i = 2; i <= 20; i += 2) {
    console.log(i);
}


console.log("\n--- 4. Odd Numbers between 1 and 20 ---");
for (var  i = 1; i <= 20; i += 2) {
    console.log(i);
}

console.log("\n--- 5. Sum of Numbers from 1 to 10 ---");
let sum = 0;
for (var i = 1; i <= 10; i++) {
    sum += i; 
}
console.log("The total sum is:", sum);

console.log("\n--- 6. FizzBuzz from 1 to 30 ---");
for (var  i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}