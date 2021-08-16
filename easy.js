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