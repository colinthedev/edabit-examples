function cleanUpArray(arr) {
    let evens = arr.map(Number).filter(x => x % 2 == 0)
    let odds = arr.map(Number).filter(x => x % 2 == 1)
    return [evens, odds]
}

// ------------------------------------------------------------

// Write a function that takes two numbers and returns if they should be added, subtracted, multiplied or divided to get 24. If none of the operations can give 24, return null.
function operation(num1, num2) {
    let twoFour = 24; // check for 24

    let add = num1 + num2;
    let sub = num1 - num2;
    let divided = num1 / num2;
    let multiply = num1 * num2;

    return add == twoFour ? "added"
        : sub == twoFour ? "subtracted"
            : divided == twoFour ? "divided"
                : multiply == twoFour ? "multiplied"
                    : null;

    // Same as ternary 
    if (add == twoFour) return "added"
    if (sub == twoFour) return "subtracted"
    if (divided == twoFour) return "divided"
    if (multiply == twoFour) return "multiplied"
    else return null
}

// ------------------------------------------------------------

// Write two functions:
//  toInt() : A function to convert a string to an integer.
//  toStr() : A function to convert an integer to a string.

function toInt(str) {
    return parseInt(str)
}

function toStr(int) {
    return int.toString()
}

// ------------------------------------------------------------

// Create a function that returns the selected filename from a path.Include the extension in your answer.

//      Examples
//  getFilename("C:/Projects/pil_tests/ascii/edabit.txt") ➞ "edabit.txt"

//  getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3") ➞ "Beethoven_5.mp3"

//  getFilename("ffprobe.exe") ➞ "ffprobe.exe"
function getFilename(path) {
    let splitFile = path.split('/')
    return getFile = splitFile.pop(-1)
}

// ------------------------------------------------------------

// Create a function that takes an array and returns the sum of all numbers in the array.

//     Examples
// getSumOfItems([2, 7, 4]) ➞ 13

// getSumOfItems([45, 3, 0]) ➞ 48

// getSumOfItems([-2, 84, 23]) ➞ 105

function getSumOfItems(arr) {
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    return arr.reduce(reducer)
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// ------------------------------------------------------------

// Create a function which makes the last character of a string repeat n number of times.

//     Examples
// modifyLast("Hello", 3) ➞ "Hellooo"
// modifyLast("hey", 6) ➞ "heyyyyyy"
// modifyLast("excuse me what?", 5) ➞ "excuse me what?????"

function modifyLast(str, n) {
    let slice = str.slice(-1);
    let multiplied = slice.repeat(n - 1)
    return `${str}${multiplied}`
}

// ------------------------------------------------------------

// Create a function that takes date in the format yyyy / mm / dd as an input and returns "Bonfire toffee" if the date is October 31, else return "toffee".

//     Examples
// halloween(new Date("2013/10/31")) ➞ "Bonfire toffee"

// halloween(new Date("2012/07/31")) ➞ "toffee"

// halloween(new Date("2011/10/12")) ➞ "toffee"

// year = d.getFullYear();

function halloween(dt) {

    let d = new Date(dt),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return month === '10' && day === '31' ? 'Bonfire toffee' : 'toffee';
}

// ------------------------------------------------------------

// Create a function that takes three numbers as arguments and returns true if it's a triangle and false if not.

//  Examples
// isTriangle(2, 3, 4) ➞ true

// isTriangle(3, 4, 5) ➞ true

// isTriangle(4, 3, 8) ➞ false

//   TEST
// is a and b > c
// is a and c > b
// is b and c > a

function isTriangle(a, b, c) {
    let firstTwo = a + b;
    let firstLast = a + c;
    let lastTwo = b + c;

    return firstTwo > c && firstLast > b && lastTwo > a ? true : false;
}

// ------------------------------------------------------------

// Given a pH value, return whether that value is "alkaline"(greater than 7), "acidic"(less than 7), or "neutral"(7).Return "invalid" if the value given is less than 0 or greater than 14.

// Image of a pH chart

// Examples
// pHName(5) ➞ "acidic"

// pHName(8.7) ➞ "alkaline"

// pHName(7) ➞ "neutral"

function pHName(pH) {
    return pH > 7 && pH < 14 ? "alkaline"
        : pH < 7 && pH > 0 ? "acidic"
            : pH == 7 ? "neutral"
                : "invalid"
}

// ------------------------------------------------------------

//  QUESTION
// Backpack Bill and Wallet Will set off for the annual festival.As they approach the stalls, Bill retorts that he'll be able to bring home more stuff than Will. Taking this as a challenge, Will refutes and a competition spurs into action.

// Backpack Bill has an infinite inventory space, but a limited number of coins.
// Wallet Will has an infinite number of coins, but a limited inventory space.
// Create a function that returns the name of the man who can bring home the most items.The parameters are given as follows:

// Bill's amount of money.
// Will's amount of inventory space.
// The item's price.
// The item's size.
// Worked Example
// whoWinsTonight(40, 95, 5, 10) ➞ "Will"

// The item costs 5 coins and takes up 10 inventory spaces.
// Bill can only buy a maximum of 8 items (40 coins DIV 5 = 8).
// Will can only bring home a maximum of 9 items. (95 inventory spaces DIV 10 = 9).
// Will is the winner.

//  MY THOUGHT PROCESS BELOW
// Who can bring home the most
// Bill amt money
// Wills amt inventory space
// Items price
// Items size

// See how much bill can carry then compare to Will
//      Bill
// Bill amt money
// Items price

//      Will
// Wills amt inventory space
// Items size

function whoWinsTonight(coins, space, price, size) {

    let billSpace = Math.floor(coins / price);
    let willSpace = Math.floor(space / size);

    return billSpace < willSpace ? 'Will'
        : billSpace === willSpace ? 'Tie'
            : 'Bill'
}

// ------------------------------------------------------------

// Create a function which returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.

//     Examples
// getCase("whisper...") ➞ "lower"

// getCase("SHOUT!") ➞ "upper"

// getCase("Indoor Voice") ➞ "mixed"

function getCase(str) {

    return str == str.toUpperCase() ? 'upper'
        : str == str.toLowerCase() ? 'lower'
            : 'mixed'
}

// ------------------------------------------------------------

// There are three methods(exclude compile) that you can use with regular expression literals.Use these two methods to fix the code.One method returns a boolean if there is a match.The other method returns an iterator from a search.

function twoMethods() {
    // find and equals are not regular expression methods.  Replace them. 
    let methodOne = /hello/.exec("hello")[0] === "hello"
    let methodTwo = /hello/.test("hello") // returns a boolean
    return methodOne && methodTwo
}
// exec search for match returns an array result or null if none
// test returns a boolean true / false

// ------------------------------------------------------------

// Many IDS(for emails or Google ID) are created using the person's name.

// Create a function that will return a four - character ID using the person's first name and last name. The first character will be the first letter of the first name but in lowercase. The next three characters will be the first three characters of the last name, but the first letter will be capitalized and the other two will be in lower case.

// Examples
// createID("mary", "lamb") ➞ "mLam"

// createID("John", "SMITH") ➞ "jSmi"

// createID("mary", "smith") ➞ "mSmi"

// first char => first letter of first name in lowercase()
// next three char => first three letters of last name first char uppercase() rest lowercase()

function createID(firstname, lastname) {
    let lowerFirstName = firstname.toLowerCase().slice(0, 1);
    let upperLastName = lastname.charAt(0).toUpperCase()
    let lowerLastName = lastname.toLowerCase().slice(1, 3)

    return `${lowerFirstName}${upperLastName}${lowerLastName}`
}

// ------------------------------------------------------------

// Write a function that stutters a word as if someone is struggling to read it.The first two letters are repeated twice with an ellipsis ...and space after each, and then the word is pronounced with a question mark?.

//     Examples
// stutter("incredible") ➞ "in... in... incredible?"

// stutter("enthusiastic") ➞ "en... en... enthusiastic?"

// stutter("outstanding") ➞ "ou... ou... outstanding?"

function stutter(word) {
    let firstTwo = word.slice(0, 2);
    return `${firstTwo}... ${firstTwo}... ${word}?`
}

// ------------------------------------------------------------

// Write a function that takes an integer minutes and converts it to seconds.

//     Examples
// convert(5) ➞ 300

// convert(3) ➞ 180

// convert(2) ➞ 120

function convert(minutes) {
    return minutes * 60;
}

// ------------------------------------------------------------

// Mubashir created an infinite loop! Help him by fixing the code in the code tab to pass this challenge.Look at the examples below to get an idea of what the function should do.

//     Examples
// printArray(1) ➞[1]

// printArray(3) ➞[1, 2, 3]

// printArray(6) ➞[1, 2, 3, 4, 5, 6]

function printArray(number) {
    var newArray = [];

    for (var i = 1; i <= number; i++) {
        newArray.push(i);
    }

    return newArray;
}

// ------------------------------------------------------------

// Get sum of all nums in array
// Get the num of index in array
// Divide total by num of index

function mean(arr) {
    let total = arr.reduce((a, b) => a + b, 0);
    let numIndex = arr.length;
    let average = total / numIndex;
    return Math.round(average * 100) / 100
}

// ------------------------------------------------------------
// START OF EASY QUESTIONS
// ------------------------------------------------------------

// You will need to write three unfinished logic gates.Continue to write the three logic gates: AND, OR, and NOT.

//     Examples
// AND(1, 1) ➞ 1
// AND(0, 0) ➞ 0

// OR(1, 0) ➞ 1
// OR(1, 1) ➞ 1

// NOT(0) ➞ 1
// NOT(1) ➞ 0

function NOT(n) {
    let one = 1
    let zero = 0
    return n === one ? zero : one
}

function AND(a, b) {
    return a && b
}

function OR(a, b) {
    return a || b
}

// ------------------------------------------------------------

// Write a function that takes the last number of a consecutive list of numbers and returns the total of all numbers up to and including it.

//     Examples
// addUpTo(3) ➞ 6
// // 1 + 2 + 3 = 6

// addUpTo(10) ➞ 55
// // 1 + 2 + 3 + ... + 10 = 55

// addUpTo(7) ➞ 28
// // 1 + 2 + 3 + ... + 7 = 28

// Loop starting at 0 check if lessthan or equal to n
// keep adding and storing in totalNum until reaches n 

function addUpTo(n) {
    totalNum = 0
    for (i = 0; i <= n; i++) {
        totalNum += i
    }
    return totalNum
}

// ------------------------------------------------------------

// Given a number and an object with min and max properties, return true if the number lies within the given range(inclusive).

//     Examples
// isInRange(4, { min: 0, max: 5 }) ➞ true

// isInRange(4, { min: 4, max: 5 }) ➞ true

// isInRange(4, { min: 6, max: 10 }) ➞ false

// isInRange(5, { min: 5, max: 5 }) ➞ true
// Notes
// Numbers can be positive or negative, and they may not be integers.
// You can assume min <= max is always true.

function isInRange(num, range) {
    return num >= range.min && num <= range.max ? true : false
}

// ------------------------------------------------------------

// You hired three programmers and you(hopefully) pay them.Create a function that takes three numbers(the hourly wages of each programmer) and returns the difference between the highest - paid programmer and the lowest - paid.

//     Examples
// programmers(147, 33, 526) ➞ 493

// programmers(33, 72, 74) ➞ 41

// programmers(1, 5, 9) ➞ 8

function programmers(one, two, three) {
    let min = Math.min(one, two, three)
    let max = Math.max(one, two, three)
    return max - min;
}

// ------------------------------------------------------------

// Mubashir created a function that takes two numbers a and b and an operator o.His function should return the result of the corresponding mathematical function on both numbers.If the operator is not one of the specified characters +, -, /, *, or if there is a division by zero, the function should return null. Help him by fixing the code in the code tab to pass this challenge.

// Look at the examples below to get an idea of what the function should do:

//     Examples
// basicCalculator(2, '+', 4) ➞ 6

// basicCalculator(6, '-', 5) ➞ 1

// basicCalculator(12, '/', 3) ➞ 4

// basicCalculator(3, '*', 4) ➞ 12

// basicCalculator(1, '/', 0) ➞ null
// // Division by zero is not possible

// basicCalculator(1, 'x', 0) ➞ null
// // 'x' is not an operator

function basicCalculator(a, o, b) {
    return o === '+' ? eval('a+b')
        : o === '-' ? eval('a-b')
            : o === '/' && b != 0 ? eval('a/b')
                : o === '*' ? eval('a*b')
                    : null
}

// ------------------------------------------------------------

// Create a function that returns an array of all the integers between two given numbers start and end.

//     Examples
// rangeOfNum(2, 4) ➞[3]

// rangeOfNum(5, 9) ➞[6, 7, 8]

// rangeOfNum(2, 11) ➞[3, 4, 5, 6, 7, 8, 9, 10]

//     Notes
// start will always be <= end.
// start and end are NOT included in the final array.
// If start == end, return an empty array.

function rangeOfNum(start, end) {
    let returnedArr = []
    for (i = 0; i < end; i++) {
        if (i > start && i < end)
            returnedArr.push(i)
    }
    return returnedArr
}

// ------------------------------------------------------------

function notShare(arr1, arr2) {
    for (let i of arr1) {
        for (let j of arr2) {
            if (i === j) return false;
        }
    }
    return true;
}

function notShare(arr1, arr2) {
    console.log(arr1)
    console.log(arr2)

    if (arr1.includes(arr2)) {
        return false
    } return true
}

// ------------------------------------------------------------

// Create a function that takes three number arguments — one number as an input and two additional numbers representing the endpoints of a closed range — and return the number limited to this range.

// If the number falls within the range, the number should be returned.
// If the number is less than the lower limit of the range, the lower limit should be returned.
// If the number is greater than the upper limit of the range, the upper limit should be returned.

function limitNumber(num, rangeLow, rangeHigh) {
    return num > rangeLow && num < rangeHigh ? num
        : num < rangeLow ? rangeLow
            : rangeHigh
}

// ------------------------------------------------------------

// Your spouse wants a copy of the stolen items.Given an object containing the stolen items, return a copy of that list.

//     Examples
// { piano: 100, tv: 50 } ➞ { piano: 100, tv: 50 }

function makeCopy(obj) {
    let copy = { ...obj }
    return copy
}

// ------------------------------------------------------------

// Given an array of numbers, return an array which contains all the even numbers in the orginal array, which also have even indices.

//     Examples
// getOnlyEvens([1, 3, 2, 6, 4, 8]) ➞[2, 4]

// getOnlyEvens([0, 1, 2, 3, 4]) ➞[0, 2, 4]

// getOnlyEvens([1, 2, 3, 4, 5]) ➞[]

function getOnlyEvens(nums) {
    return nums.filter((even, index) => even % 2 === 0 && index % 2 === 0)
}

// ------------------------------------------------------------

// Create a function that flips M's to W's(all uppercase).

//     Examples
// wumbo("I LOVE MAKING CHALLENGES") ➞ "I LOVE WAKING CHALLENGES"

// wumbo("MEET ME IN WARSAW") ➞ "WEET WE IN WARSAW"

// wumbo("WUMBOLOGY") ➞ "WUWBOLOGY"

function wumbo(words) {
    let wordArr = [...words]
    let map = wordArr.map(x => x.replace('M', 'W'))
    return map.join('')
}

// ------------------------------------------------------------

// Create functions for the Calculator class that can do the following:

// Add two numbers.
// Subtract two numbers.
// Multiply two numbers.
// Divide two numbers.
//     Examples
// var calculator = new Calculator()

// calculator.add(10, 5) ➞ 15

// calculator.subtract(10, 5) ➞ 5

// calculator.multiply(10, 5) ➞ 50

// calculator.divide(10, 5) ➞ 2

class Calculator {
    add(a, b) {
        return a + b
    }

    subtract(a, b) {
        return a - b
    }

    multiply(a, b) {
        return a * b
    }

    divide(a, b) {
        return a / b
    }
}

// ------------------------------------------------------------
// START OF MEDIUM QUESTIONS
// ------------------------------------------------------------

// Create a function which returns the number of true values there are in an array.

//     Examples
// countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0

function countTrue(arr) {
    let instanceTrue = arr.filter(truethy => truethy === true)
    let numOfTrue = instanceTrue.length
    return numOfTrue
}

// ------------------------------------------------------------

// Create a function that takes an object and returns the keys and values as separate arrays.Return the keys sorted alphabetically, and their corresponding values in the same order.

//     Examples
// keysAndValues({ a: 1, b: 2, c: 3 })
// ➞[["a", "b", "c"], [1, 2, 3]]

// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// ➞[["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

// keysAndValues({ key1: true, key2: false, key3: undefined })
// ➞[["key1", "key2", "key3"], [true, false, undefined]]

//  Objective
// Sort key into array alphabetically
// Sort values into array in order of values matching keys

function keysAndValues(obj) {
    let keys = Object.keys(obj)
    let values = Object.values(obj)
    return newArr = [[...keys], [...values]]
}

// ------------------------------------------------------------

// A salesman has a number of cities to visit.They want to calculate the total number of possible paths they could take, visiting each city once before returning home.Return the total number of possible paths a salesman can travel, given n cities.

// If we have cities A, B and C, possible paths would be:

// A -> B -> C
// A -> C -> B
// B -> A -> C
// B -> C -> A
// C -> B -> A
// C -> A -> B
// ...which gives us 6 as the possible number of paths.

//     Examples
// paths(4) ➞ 24

// paths(1) ➞ 1

// paths(9) ➞ 362880

function paths(n) {
    return n < 0 ? -1
        : n === 0 ? 1
            : n * paths(n - 1)
}

// ------------------------------------------------------------

// You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find nemo]!".

// If you can't find Nemo, return "I can't find Nemo: (".

// Examples
// findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

// findNemo("Nemo is me") ➞ "I found Nemo at 1!"

// findNemo("I Nemo am") ➞ "I found Nemo at 2!"

function findNemo(sentence) {
    let splitSentence = sentence.split(' ')
    let indexOfNemo = splitSentence.indexOf('Nemo')
    return indexOfNemo >= 0 ? `I found Nemo at ${indexOfNemo + 1}!`
        : "I can't find Nemo :("
}

// ------------------------------------------------------------

// You have two arrays.One shows the names of the people names, while the other shows their occupation jobs.Your task is to create an object displaying each person to their respective occupation.

// Names	Jobs
// Annie	Teacher
// Steven	Engineer
// Lisa	Doctor
// Osman	Cashier
// Example
// const names = ["Dennis", "Vera", "Mabel", "Annette", "Sussan"]
// const jobs = ["Butcher", "Programmer", "Doctor", "Teacher", "Lecturer"]

// assignPersonToJob(names, jobs) ➞ {
//     Dennis: "Butcher",
//         Vera: "Programmer",
//             Mabel: "Doctor",
//                 Annette: "Teacher",
//                     Sussan: "Lecturer"
// }

function assignPersonToJob(names, jobs) {
    let result = {}
// For each names / jobs store name in result object as key with job as value
    names.forEach((name, job) => result[name] = jobs[job])
    return result
}

// ------------------------------------------------------------
