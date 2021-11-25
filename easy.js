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

// Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.

// If f returns the larger number, return the string f.
// If g returns the larger number, return the string g.
// If the functions return the same number, return the string neither.
//     Examples
// whichIsLarger(() => 5, () => 10) ➞ "g"

// whichIsLarger(() => 25, () => 25) ➞ "neither"

function whichIsLarger(f, g) {
    return f() < g() ? 'g'
        : f() > g() ? 'f'
            : 'neither'
}

// ------------------------------------------------------------

// Create a function that takes a number as an argument and returns the appropriate error message.You should do this without using the switch or if statements.

// The input error will be 1 to 5:

// 1 >> "Check the fan"
// 2 >> "Emergency stop"
// 3 >> "Pump Error"
// 4 >> "c"
// 5 >> "Temperature Sensor Error"
// For any other value, return 101(you can use an if statment here).

function error(n) {
    return n === 1 ? 'Check the fan: e1'
        : n === 2 ? 'Emergency stop: e2'
            : n === 3 ? 'Pump Error: e3'
                : n === 4 ? 'c: e4'
                    : n === 5 ? 'Temperature Sensor Error: e5'
                        : 101
}

// ------------------------------------------------------------

// Create a function that takes a 2D array arr returns the sum of the minimum value in each row.

//     Examples
// sumMinimums([
//     [1, 2, 3, 4, 5],
//     [5, 6, 7, 8, 9],
//     [20, 21, 34, 56, 100]
// ]➞ 26

// minimum value of the first row is 1
// minimum value of the second row is 5
// minimum value of the third row is 20

function sumMinimums(arr) {
    let minVals = arr.map(item => Math.min(...item))
    return minVals.reduce((a, b) => a + b)
}

// ------------------------------------------------------------

// You will be given an array of drinks, with each drink being an object with two properties: name and price.Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

// Assume that the following array of drink objects needs to be sorted:

// drinks = [
//     { name: "lemonade", price: 50 },
//     { name: "lime", price: 10 }
// ]
// The output of the sorted drinks object will be:

// Examples
// sortDrinkByPrice(drinks) ➞[{ name: "lime", price: 10 }, { name: "lemonade", price: 50 }]

function sortDrinkByPrice(drinks) {
    return drinks.sort((a, b) => (a.price > b.price) ? 1 : -1)
}

// ------------------------------------------------------------

// Create a function that takes an array of non - negative integers and strings and return a new array without the strings.

//     Examples
// filterArray([1, 2, "a", "b"]) ➞[1, 2]

// filterArray([1, "a", "b", 0, 15]) ➞[1, 0, 15]

// filterArray([1, 2, "aasf", "1", "123", 123]) ➞[1, 2, 123]

function filterArray(arr) {
    return arr.filter(Number.isInteger)
}

// ------------------------------------------------------------

// spelling("happy") ➞["h", "ha", "hap", "happ", "happy"]

// spelling("eagerly") ➞["e", "ea", "eag", "eage", "eager", "eagerl", "eagerly"]

function spelling(str) {
    return str.split('').map((el, i) => str.slice(0, i + 1))
}

// ------------------------------------------------------------

// Create a recursive function that takes two parameters and repeats the string n number of times.The first parameter txt is the string to be repeated and the second parameter is the number of times the string is to be repeated.

//     String.prototype.repeat() is not allowed

// Examples
// repetition("ab", 3) ➞ "ababab"

// repetition("kiwi", 1) ➞ "kiwi"

// repetition("cherry", 2) ➞ "cherrycherry"

function repetition(txt, n) {
    let repeatedTxt = ''
    while (n > 0) {
        repeatedTxt += txt
        n--
    }
    return repeatedTxt
}

// ------------------------------------------------------------

// Create a function that takes an array of strings and return an array, sorted from shortest to longest.

//     Examples
// sortByLength(["Google", "Apple", "Microsoft"])
// ➞["Apple", "Google", "Microsoft"]

// sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"])
// ➞["Raphael", "Leonardo", "Donatello", "Michelangelo"]

// sortByLength(["Turing", "Einstein", "Jung"])
// ➞["Jung", "Turing", "Einstein"]

function sortByLength(arr) {
    return arr.sort((a, b) => (a.length > b.length) ? 1 : -1)
}

// ------------------------------------------------------------

const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
};

const objToArray = [];
for (let val in checkObj) {
    if (checkObj[val] >= 2) {
        objToArray.push(checkObj[val])
    }
}
console.log(objToArray)

// ------------------------------------------------------------

function subtractTwo(num) {
    return num - 2;
}

function map(arr, callback) {
    const finalArr = []

    for (let i = 0; i < arr.length; i++) {
        const updated = callback(arr[i])
        finalArr.push(updated)
    }
    return finalArr
}

// Uncomment these to check your work!
console.log(typeof subtractTwo); // should log: 'function'
console.log(typeof map); // should log: 'function'
console.log(map([3, 4, 5], subtractTwo)); // should log: [ 1, 2, 3 ]

// ------------------------------------------------------------

function forEach(arr, callback) {
    // loop over arr += callback
    for (let val in arr) {
        val += callback
    }
}

function map(arr, callback) {
    const finalArr = []
 
    const updated = forEach(arr[i])
    finalArr.push(updated)
    
    return finalArr
}

// Uncomment these to check your work!
console.log(typeof forEach); // should log: 'function'
forEach(['a', 'b', 'c'], i => console.log(i)); // should log: 'a', 'b', 'c'
console.log(typeof map); // should log: 'function'
console.log(map([3, 4, 5], n => n - 2)); // should log: [1, 2, 3]


const finalArr = []

function forEach(arr, callback) {
    return finalArr += callback;
}

function map(arr, callback) {

    const updated = forEach(arr)
    finalArr.push(updated)

    return finalArr
}

// Uncomment these to check your work!
console.log(typeof forEach); // should log: 'function'
forEach(['a', 'b', 'c'], i => console.log(i)); // should log: 'a', 'b', 'c'
console.log(typeof map); // should log: 'function'
console.log(map([3, 4, 5], n => n - 2)); // should log: [1, 2, 3]

// ------------------------------------------------------------

function reduce(arr, callback, val) {
    return arr.reduce((callback, val) => callback + val)
}

// Uncomment these to check your work!
const nums = [4, 1, 3];
const add = function (a, b) { return a + b; }
console.log(reduce(nums, add, 0)); // should log 8

// ------------------------------------------------------------

// A strong Scottish accent makes every vowel similar to an "e", so you should replace every vowel with an "e".Additionally, it is being screamed, so it should be in block capitals.

// Create a function that takes a string and returns a string.

//     Examples
// toScottishScreaming("hello world") ➞ "HELLE WERLD"

// toScottishScreaming("Mr. Fox was very naughty") ➞ "MR. FEX WES VERY NEEGHTY"

// toScottishScreaming("Butterflies are beautiful!") ➞ "BETTERFLEES ERE BEEETEFEL!"

function toScottishScreaming(str) {
    str = str.toLowerCase()
    let vowel = { 'a': 'e', 'i': 'e', 'o': 'e', 'u': 'e' }
    str = str.replace(/[aiou]/g, m => vowel[m])
    return str.toUpperCase()
}

// ------------------------------------------------------------

// Character recognition software often makes mistakes when documents(especially old ones written with a typewriter) are digitized.

// Your task is to correct the errors in the digitized text.You only have to handle the following mistakes:

// A is misinterpreted as 4
// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

//     Examples
// keyboardMistakes("MUB45H1R") ➞ "MUBASHIR"

// keyboardMistakes("DUBL1N") ➞ "DUBLIN"

// keyboardMistakes("51NG4P0RE") ➞ "SINGAPORE"

function keyboardMistakes(str) {
    let correctedErrs = { '4': 'A', '5': 'S', '0': 'O', '1': 'I' }
    return str.replace(/[4501]/g, e => correctedErrs[e])
}

// ------------------------------------------------------------

// Write a function that takes a two - digit number and determines if it's the largest of two possible digit swaps.

// To illustrate:

// largestSwap(27) ➞ false

// largestSwap(43) ➞ true

function largestSwap(num) {
    const reversedNum = parseFloat(num.
        toString()
        .split('')
        .reverse()
        .join(''))
    
    return num < reversedNum ? false
        : true
}

// ------------------------------------------------------------

// Create a function that takes two arguments: a father's current age fAge and his son's current age sAge.Сalculate how many years ago the father was twice as old as his son, or in how many years he will be twice as old.

//     Examples
// ageDifference(36, 7) ➞ 22
// // 22 years from now, the father will be 58 years old and his son will be 29 years old.

// ageDifference(55, 30) ➞ 5
// // 5 years ago, the father was 50 years old and his son was 25 years old.

// ageDifference(42, 21) ➞ 0

function ageDifference(fAge, sAge) {
    let yeayea = sAge * 2
    return Math.abs(fAge - yeayea)
}

// ------------------------------------------------------------

// Given an array of either entirely odd integers or entirely even integers except for a single Outlier Number.Create a function to return this number.

//     Examples
// outlierNumber([2, 3, 4]) ➞ 3
// // 2 and 4 are even numbers.
// // 3 is an outlier number.

// outlierNumber([1, 2, 3]) ➞ 2

// outlierNumber([4, 1, 3, 5, 9]) ➞ 4

function outlierNumber(arr) {
    const evens = arr.filter(num => Math.abs(num) % 2 === 0)
    const odds = arr.filter(num => Math.abs(num) % 2 === 1)
    if (evens.length > 1) {
        return odds[0]
    } return evens[0]
}

// ------------------------------------------------------------

function countVowels(str) {
    const regex = /[aeiou]/
    const vowels = [...str].filter(vowel => vowel.match(regex))
    return vowels.length
}

// ------------------------------------------------------------

// Take an array of integers(positive or negative or both) and return the sum of the absolute value of each element.

//     Examples
// getAbsSum([2, -1, 4, 8, 10]) ➞ 25

// getAbsSum([-3, -4, -10, -2, -3]) ➞ 22

// getAbsSum([2, 4, 6, 8, 10]) ➞ 30

// getAbsSum([-1]) ➞ 1

function getAbsSum(arr) {
    arr = arr.map(s => Math.abs(s))
    const reducer = (valueA, valueB) => valueA + valueB
    return arr.reduce(reducer)
}

// ------------------------------------------------------------

// Create a function that takes an array of numbers and returns a new array, sorted in ascending order(smallest to biggest).

// Sort numbers array in ascending order.
// If the function's argument is null, an empty array, or undefined; return an empty array.
// Return a new array of sorted numbers.
//     Examples
// sortNumsAscending([1, 2, 10, 50, 5]) ➞[1, 2, 5, 10, 50]

// sortNumsAscending([80, 29, 4, -95, -24, 85]) ➞[-95, -24, 4, 29, 80, 85]

// sortNumsAscending(null) ➞[]

// sortNumsAscending([]) ➞[]

function sortNumsAscending(arr) {
    if (arr === [] || arr === null || arr === undefined) {
        return []
    } return arr.sort((a, b) => a - b)
}

// ------------------------------------------------------------

// Create a function that finds the word "bomb" in the given string(not case sensitive).If found, return "Duck!!!", otherwise return "There is no bomb, relax.".

//     Examples
// bomb("There is a bomb.") ➞ "Duck!!!"

// bomb("Hey, did you think there is a bomb?") ➞ "Duck!!!"

// bomb("This goes boom!!!") ➞ "There is no bomb, relax."

function bomb(str) {
    return str.toLowerCase().includes("bomb") ? 'Duck!!!'
        : "There is no bomb, relax."
}

// ------------------------------------------------------------


