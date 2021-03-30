// 1. Counting Sheep
// Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

let input = 3;

const numSheep = function(input) {
  //base case
  if (input === 0) {
    return input + ': All sheep jumped over the fence'
  }
  //general case
  return (input + ": Another sheep jumps over the fence") + numSheep(input - 1)
}
console.log(numSheep(3))

//==========================================================
// 2. Power Calculator
// Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)

const powerCalculator = (base, exponent) => {
  if  (exponent < 0) {
    return 'exponent should be >= 0'
  }
  //base case
  if (exponent === 0) {
    return 1;
  }
  //recursive case
  return base * powerCalculator(base, exponent - 1)
}

console.log(powerCalculator(10, 2))

//==========================================================
// 3. Reverse String
// Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.


// First Part of the recursion method
// You need to remember that you won’t have just one call, you’ll have several nested calls

// Each call: str === "?"        	                  reverseString(str.subst(1))     + str.charAt(0)
// 1st call – reverseString("Hello")   will return   reverseString("ello")           + "h"
// 2nd call – reverseString("ello")    will return   reverseString("llo")            + "e"
// 3rd call – reverseString("llo")     will return   reverseString("lo")             + "l"
// 4th call – reverseString("lo")      will return   reverseString("o")              + "l"
// 5th call – reverseString("o")       will return   reverseString("")               + "o"

// Second part of the recursion method
// The method hits the if condition and the most highly nested call returns immediately

// 5th call will return reverseString("") + "o" = "o"
// 4th call will return reverseString("o") + "l" = "o" + "l"
// 3rd call will return reverseString("lo") + "l" = "o" + "l" + "l"
// 2nd call will return reverserString("llo") + "e" = "o" + "l" + "l" + "e"
// 1st call will return reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h" 

function reverseString(string) {
  if (string === "")
    return ""

  else {
    // console.log(string.substr(1))
    console.log(string.charAt(0))

    return reverseString(string.substr(1)) + string.charAt(0)

  }
}

console.log(reverseString('hello'))


//==================================================
// 4. nth Triangular Number
// Calculate the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.


const triangularNumber = number => {
  //base case
  if (number === 0) {
    return 0;
  }

  //general case
  return number + triangularNumber(number - 1);
};

console.log(triangularNumber(4));

//==========================================================
// 5. String Splitter
// Write a recursive function that splits a string based on a separator (similar to String.prototype.split). Don't use JS array's split function to solve this problem.

// Input: 02/20/2020
// Output: ["02", "20", "2020"]

const stringSplitter = (string, splitter) => {
  //base case
  if (string.indexOf(splitter) === -1) {
    return [string.slice(0, string.length)]
  }
  //general case
  return [string.slice(0, string.indexOf(splitter)), ...stringSplitter(string.slice(string.indexOf(splitter) + 1), splitter)]
}

console.log(stringSplitter('02/20/2020', '/'))


//==========================================================
// 6. Fibonacci
// Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

const Fibonacci = (num) => {
  if (num <= 0) {
    return 'please enter a number greater than 0'
  }
  if (num === 1) {
    return 1
  }
  if (num === 2) {
    return 1
  }
  return Fibonacci(num - 1) + Fibonacci(num - 2)
}
console.log(Fibonacci(10))




//==========================================================
// 7. Factorial
// Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by multiplying that number by each number between itself and 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

const factorial = (num) => {
  //base case
  if (num === 0) {
    return 'has to be an integer greater than 0'
  }
  if (num === 1) {
    return 1
  }
  return num * factorial(num - 1)
}
console.log(factorial(4), 'factorial')



//==========================================================
// 8. Find a way out of the maze
// You have entered a Maze and need to find your way out of it. There are more than one possible paths through the Maze to the single exit point. Write a recursive function that will help you find a possible path through the maze.
//==========NOT SOLVED======================================



//==========================================================
// 9. Find ALL the ways out of the maze
// Use the above maze and modify your solution so it finds All the possible exit paths through the Maze. To find all possible exit paths through the maze, think about how many places you can move at each turn. Possibly up, down, left or right?

// Notice that this maze has 3 exits paths. Your recursive function should print all three of the paths with the proper directions. For example, given the maze above, the program should output the following:

// Path to the exit: RRDDLLDDRRRRRR
// Path to the exit: RRDDRRUURRDDDD
// Path to the exit: RRDDRRRRDD
//==========NOT SOLVED======================================




//==========================================================
// 10. Anagrams
// An anagram is any word or phrase that uses the letters of a given ("subject") word or phrase in another, rearranged order. Write a function that creates an anagram list, listing all the rearrangements of a given word. For example, if the user types "east", the program should list all 24 permutations, including "eats", "etas", "teas", and non-words like "tsae".

// Hint: For your algorithm, you might want to think about a prefix and use that to create the new words. For example, given "east", use "e" as a prefix and place it in front of all 6 permutations of "ast" — "ast", "ats", "sat", "sta", "tas", and "tsa". This will give you the words "east", "eats", "esat", "esta", "etas", and "etsa". Continue this way until you find all the anagrams for "east". Then you can use "a" as a prefix and permute the remaining words "est". For "east", there should be 24 words.

const anagrams = (string) => {
  if (string.length === 1) {
    return [string]
  }
  let resultArray = [];
  let stringArray = string.split('')
  for (let i = 0; i < stringArray.length; i++) {
    const anagramResults = anagrams(spliceNoMutate(stringArray, i).join(''));
    for (let j = 0; j < anagramResults.length; j++) {
      resultArray.push(stringArray[i] + anagramResults[j])
    }
  }
  return resultArray;
}

const spliceNoMutate = (string, index) => {
  let result = [...string]
  result.splice(index, 1)
  return result
}

console.log(anagrams('answer'))


//==========================================================
// 11. Organization Chart
// Write a recursive function that prints the following organization chart. Your output should be as shown below with proper indentation to show the hierarchy. You may store the org chart in an object and send that as an input to your program.

// Zuckerberg
//     Schroepfer
//         Bosworth
//             Steve
//             Kyle
//             Andra
//         Zhao
//             Richie
//             Sofia
//             Jen
//     Schrage
//         VanDyck
//             Sabrina
//             Michelle
//             Josh
//         Swain
//             Blanch
//             Tom
//             Joe
//     Sandberg
//         Goler
//             Eddie
//             Julie
//             Annie
//        Hernandez
//             Rowi
//             Inga
//             Morgan
//        Moissinac
//             Amy
//             Chuck
//             Vinni
//        Kelley
//             Eric
//             Ana
//             Wes
//==========NOT SOLVED======================================





//==========================================================
// 12. Binary Representation
// Write a recursive function that prints out the binary representation of a given number. For example, the program should take 3 as an input and print 11 as output, or 25 as an input and print 11001 as an output. Note that the binary representation of 0 should be 0.

const binary = (num) => {
  if (num === 0) {
    return 0
  }
  const div = Math.floor(num/2)
  const remainder = num % 2
  if (div === 0) {
    return `${remainder}`
  }
  return binary(div) + remainder.toString()
}

console.log(binary(25))
console.log(binary(0))
console.log(binary(3))