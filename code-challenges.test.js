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

describe("fibSequenceImplement", ()=> {
  it("returns a fib sequence with the length of a value", () => {
    const fibonacciLength1 = 6
    // Expected output: [1, 1, 2, 3, 5, 8]
    const fibonacciLength2 = 10
    // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(fibSequenceImplement(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibSequenceImplement(fibonacciLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})
// b) Create the function that makes the test pass.

// Pseudo code:
// Assessment 1 broken down for better understaning:
// (1) Create a function that takes in a number (greater than 2) 
// (2) returns an array containing the Fibonacci sequence. 
// (3) The length of the array is determined by the argument of the function.

// // INPUT: a const with a number
// // OUTPUT: an array of numbers with Fibonacci sequence
// // PROCESS:  

// using if/else statement create a code block that will output any number greater than 2
// [1, 1, 2, 3, 5, 8]
// [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
// fib Seq  needs to start out with 2 numbers and they are both 1 and 1
// to get index 2 i need to sum up the index 0 & 1
// to get index 3 i need to sum up the index 1 & 2
// [1, 1]
// i will use for loop, and it will give a number that will be used as index
// start count at 2 and use a variable as a length of the array
// and we want to iterate through each value + 1
// sum of index 0 and 1 will give us a 3d value in the array
// create an array = [1, 1] and push new values into it

const fibSequenceImplement = (num) => {
  const newArr = [1, 1]
  
  if (num > 2 ) {
    for(let i=2; i<num; i++){
      newArr.push(newArr[i-2] + newArr[i-1])
      // console.log(newArr);
    }
    return newArr
  }
}
// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.
describe("objectsomething", ()=> {
  it("returns an array with sorted values", () => {
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
    expect(objectsomething(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(objectsomething(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})


// b) Create the function that makes the test pass.

// Pseudo code:
// INPUT: an array of objects with key:vlaues
// OUTPUT: an array with sorted values from least to greatest
// PROCESS:
// Check out resource: Object.values() 
// create a function that takes in a parameter (to make function reusable)
// return Object.values() with a built in method for array .sort 
// since the jest test returns the first array fibSequenceImplement as passed and the second array is returned not passed. this is a bad failure becuase array is sorting but number 100 is inserted second after number 10
// since .sort assumes that the string is being sorted it return 100 after 10 and not at the end as the highest number
// using an anonymouse function ()=>{} i will pass parameters a and b and return a-b. this will turn our array into numbers. Anythins with negative output will go to the right of the array as the bigger number. pisitive output  will go to the left and 0 will stay in the middle. this way the array will turn into numbers and sort proporly.

const objectsomething = (stuff) => {
        return Object.values(stuff).sort((a, b) => a - b)
}

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.
describe("twoOfEach", ()=> {
  it("returns itirated array with previouse indexes accumulated summed", () => {
    const accountTransactions1 = [100, -17, -23, -9]
    // Expected output: [100, 83, 60, 51]
    const accountTransactions2 = [250, -89, 100, -96]
    // Expected output: [250, 161, 261, 165]
    const accountTransactions3 = []
    // Expected output: []
    expect(twoOfEach(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(twoOfEach(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(twoOfEach(accountTransactions3)).toEqual([])
  })
})


// b) Create the function that makes the test pass.

// Pseudo code:
// INPUT: an array of numbers
// OUTPUT: itirated array with previouse indexes accumulated summs returned
// PROCESS:
// Create a function that takes in an array as a parameter for reusabilety
// create an array with one value index[0] of any array inside it, because the itiration will start from the first number and should not be changed.
// create a for loop that starts i=1 because we already have our first value in the new array. The for loop will itirate through the entire array length and will .push into the new created array and array[i] where i starts from 1(not 0) and adds its new value into a new array, through pushing values i-1
// returns an array of the accumulating sum. 
// An empty array should return an empty array.


const twoOfEach = (array) => {
  const storageArray = [array[0]];
  for (let i = 1; i < array.length; i++) {
      storageArray.push(array[i] + storageArray[i-1])
    }
    return storageArray
}


