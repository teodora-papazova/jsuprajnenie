// function sum(input){
//     let a = Number(input[0]);
//     let b = Number(input[1]);
//     console.log(a+b);
// }
// sum([5,6])

// function name(input){
//     let name = String(input[0]);
//     console.log("Hello " + name);
// }
// name(["Petar"]);

// function num(input){
//     let num = Number(input[0]);
//     if(num%2==0){
//         console.log("Even");
//     }else{
//         console.log("Odd");
//     }
// }
// num([3]);

// function findMax(input) {
//     let max = Number(input[0]);
//     for (let i = 1; i < input.length; i++) {
//         let num = Number(input[i]);
//         if (num > max) {
//             max = num;
//         }
//     }
//     console.log(max);
// }

// findMax([3, 5, 7, 2, 8, 1]);

function palindrome(input) {
    let reversed = input.split('').reverse().join('');
    return input === reversed;
}

console.log(palindrome("racecar")); 
console.log(palindrome("hello"));  

