// ASSESSMENT 3: Coding Practical Questions with Jest

// SIDENOTE : i am done for the weekends work. This HW has bit to the pulp. I didn't get to the jest because i have not figured out the working function for it to pass. I think i need some time from it. I do have a quastion. How long is too long for doing a challenge? I mean the reason i am not asking for help is because these are fundamentals and i think if i want to understand them where else would i do it. Assessment is the best way to do it. However, i do think it is not enough time. I am not done. I will be working on it through out the week. However, i will have to return what i have. 

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

const fibonacciLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibonacciLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

// Pseudo code:
// Assessment 1 broken down for better understaning:
// (1) Create a function that takes in a number (greater than 2) 
// (2) returns an array containing the Fibonacci sequence. 
// (3) The length of the array is determined by the argument of the function.

// // INPUT: a const with a number
// // OUTPUT: an array of numbers with Fibonacci sequence
// // PROCESS #1: 
// // create function named fibSequenceImplement that takes in one parameter called num. 
// const fibSequenceImplement = (num) => {
//     console.log("this is num:", num);
// // using if/else statement create a code block that will output any number greater than 2
//     if (num > 2 ) {
//       return num
//     }
//     return [fibSequenceImplement(num - 1) + fibSequenceImplement(num - 2)]
// }
// console.log(fibSequenceImplement(fibonacciLength1));
// // OUTPUT:
// // this is num: 6
// // 6


// // PROCESS #2:
// const fibSequenceImplement = (num) => {
//   console.log("this is num:", num)
  // when i<num:
  // this is num: 6
  // this is num: 5
  // this is num: 4
  // this is num: 3
  // this is num: 2
  // this is num: 1
  // this is num: 0
  // when i>num : this is num: 6
  // // using forLoop statement create a code block that will itarate through fibonacci and will determin the length of the array based on the argument provided.
  // for (let i = 0; i > num; i++){
  //   // return fibSequenceImplement(num)
  //   return fibSequenceImplement((num - 1) + (num - 2));
  //   }
  //   console.log(fibSequenceImplement(num));
  // }
  //PSEUDO###############################################PSEUDO
  // creating a function by pushing the function into a new array 
  // const fibSequence = (value) => {
  //   // console.log("this is it:", value);
  //   let storageArr = []
  //   for (let i = 0; i < value; i++){
  //     return storageArr + (fibSequence(value - 1) + fibSequence(value - 2));
  //   }
  //   // console.log(storageArr);
  //   return storageArr
  // }
  // //  returns empty

  // //PSEUDO###############################################PSEUDO
  // // Create a function using for each and other array methods (it sucks)
  // const fibSequence = (valueIndex) => {
  //   console.log("this is it:", valueIndex);
  //   let storageArr = []
  //   for (let i = 0; i < valueIndex; i++){
  //     storageArr.push((valueIndex - 1) + (valueIndex - 2));
  //     // return storageArr
  //   }
  //   // console.log(storageArr);
  //   return storageArr
  // }

//PSEUDO###############################################PSEUDO
// Create a function that shows that it actualy sees and counts the Fibonacci way
  // const fibSequence = (valueIndex) => {
  //   let prev = 0, next = 1;
  //   for (let i = 0; i < valueIndex; i++){
  //     next = prev + next;
  //     prev = next - prev;
  //   }
  //   return prev
  // }
  // 8, 55
//PSEUDO###############################################PSEUDO
// Create a function with if else statment
// const fibSequence = (valueIndex, value) => {
//   let storageArr = []
//   for (let i = 0; i < valueIndex; i++){
//     if (valueIndex > 2) {
//       // return storageArr + (fibSequence[valueIndex - 2] + fibSequence[valueIndex - 1]);
//       return storageArr.push(fibSequence(valueIndex - 1) + fibSequence(valueIndex - 2));
//       // return "ewewew"
//     } else { 
//       return "no walking"
//     }
//     // return storageArr.push(valueIndex)
//   }
// }
// 1
// 1
//PSEUDO###############################################PSEUDO
// i am sick of this and i dont know what i am doing
// const fibSequence = (array) => {
// //   console.log(array);
//   let storageArr = []
//   for (let i = 0; i < array; i++){
//     //   console.log(array);
//     if (array > 2) {
//         // return storageArr + (fibSequence[valueIndex - 2] + fibSequence[valueIndex - 1]);
//         return storageArr + (array(array.length - 1) + array(array.leangth - 2));
//         // return array.length;
//         // return "ewewew"
//     } else { 
//         return "no walking"
//     }
// }
//   return storageArr.toString(", ")
// }

// function fibSequence(num) {
//     if(num < 2) {
//         return num;
//     }
//     else {
//         for(let i = 0; i < num; i++) {
//             return fibSequence(num-1) + fibSequence(num - 2)
//             // return "dssfsdfds"
//         }
//         // return fibSequence(i)
//     }
// }
// // 3 undefined
// // 2 undefined
// // 1 undefined
// // 0 undefined
// // 1 undefined
// // 2 undefined
// // 1 undefined
// // 0 undefined
// // 11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111

// //PSEUDO###############################################PSEUDO
// i am sick of this try 2 and i dont know what i am doing
// const fiboSick = (lengthArr) => {
//     // console.log(lengthArr);
//     // limit = lengthArr
//     const storageCase = []
//     for (let i = 0; i > lengthArr.length; i++) {
//         return storageCase.push((valueIndex - 1) + (valueIndex - 2))
//     }
//     // console.log(storageCase);
//     // return fiboSick[lengthArr]
//     return storageCase + (lengthArr)
// }
// console.log(storageCase);
// console.log(fiboSick(4));


const myArray = []
for (let i = 1; i < fibonacciLength1; i++) {
  myArray.push(((i-1)+(i-2)))
} // [ -3, -1, 1, 3, 5, 7 ]

// const fiboSick = (lengthArr) => {
//     const myArray = []
//     for (let i = 0; i < lengthArr; i++) {
//         return myArray.push((i-1)+(i-2))
//     }
//     return myArray
// }

console.log(myArray);
console.log([fibonacciLength1]);
// console.log(fiboSick(fibonacciLength2));
  //PSEUDO###############################################PSEUDO
  // copied from some website to understand fabinocci
// var arr = [0, 1];
// var limit = 33;

// while (arr[arr.length - 1] + arr[arr.length - 2] <= limit) {
//     arr[arr.length] = arr[arr.length - 1] + arr[arr.length - 2];
// }
// console.log(arr);

  //PSEUDO###############################################PSEUDO
  // copied from some website to understand fabinocci
//   function fibonacci(num) {
//     if (num == 1)
//         return 0;
//     if (num == 2)
//         return 1;
//     return fibonacci(num - 1) + fibonacci(num - 2);
// }
// console.log("Fibonacci(5): " + fibonacci(5));
// console.log("Fibonacci(8): " + fibonacci(fibonacciLength2));



// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.

// Pseudo code:
const objectsomething = (stuff) => {
        return Object.values(stuff).sort((a, b) => a - b)
}
console.log(objectsomething(studyMinutesWeek1));
console.log(objectsomething(studyMinutesWeek2));


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.

// Pseudo code:


// const twoOfEach = (array) => {
//     // let arrayIndex1 = x;
//     // let arrayIndex2 = y;
//     return array.map((x, y) => {
//         console.log(x, y);

//         100 0
//         -17 1
//         -23 2
//         -9 3

//         return (x + y)
//     }) // [ 100, -16, -21, -6 ]
// }

// const twoOfEach = (array) => {
//     let storageArray = [array[0]]
//     for (let i = 0; i < array.length - 1; i++){
//     // return (array[i] + array[i]) //200
//     // return array[i + 1];  // -17
//     // array[0] + array[1] //undefined
//     // return array[0] + array[1] //83
//     // return (array[0], array[0] + array[i + 1]) // 83
//         return storageArray.push([i + 1])
//     }
// }

// const array = [0,1,2,3,4,5];
// let doubledArray = [];
// array.forEach(function(element, i) {
//   doubledArray.push(element + (i+1));
// });
// console.log(doubledArray);

const twoOfEach = (array) => {
    const storageArray = [];
    for (let i = 0; i < array.length; i++) {
        let prev = array[i]
        let next = array[i+1]
        // storageArray.push(array[0])
        // storageArray.push(array[i] + (array[i+1]))
        // storageArray.push(prev, prev += next, prev += next, prev += next, prev += next)
        // [ 100,  83,  66,  49,   32, -17, -40, -63, -86, -109, -23, -32, -41, -50,  -59,  -9, NaN, NaN, NaN,  NaN]
        storageArray.push(prev, next )

    }
    return storageArray
}

console.log(twoOfEach(accountTransactions1));


