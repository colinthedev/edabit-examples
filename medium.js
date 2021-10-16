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

// Write a function that converts an object into an array, where each element represents a key - value pair in the form of an array.

//     Examples
// toArray({ a: 1, b: 2 }) ➞[["a", 1], ["b", 2]]

// toArray({ shrimp: 15, tots: 12 }) ➞[["shrimp", 15], ["tots", 12]]

// toArray({}) ➞[]

let toArray = obj => Object.entries(obj)

// ------------------------------------------------------------

// Create a function that moves all capital letters to the front of a word.

//     Examples
// capToFront("hApPy") ➞ "APhpy"

// capToFront("moveMENT") ➞ "MENTmove"

// capToFront("shOrtCAKE") ➞ "OCAKEshrt"

// loop over if capital move to front

function capToFront(s) {
    let split = s.split('') // split each character to loop through and join back in return
    let cap = [] // store capital letters
    let lower = [] // store lowercase letters
    for (i = 0; i < split.length; i++) {
        if (split[i] == split[i].toUpperCase()) {
            cap.push(split[i]) // if uppercase push letter to cap array
        }
        else if (split[i] == split[i].toLowerCase()) {
            lower.push(split[i]) // if lowercase push letter to lower array
        }
    }
    // join split letters back together return capital letters first then lower
    return cap.join('').concat(lower.join(''))
}

// ------------------------------------------------------------

// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

//     Examples
// minMax([1, 2, 3, 4, 5]) ➞[1, 5]

// minMax([2334454, 5]) ➞[5, 2334454]

// minMax([1]) ➞[1, 1]

function secondLargest(arr) {
    let sortedArr = arr.sort((a, b) => a - b)
    return sortedArr.splice(-2, 1)
}

function minMax(arr) {
    let sortedArr = arr.sort((a, b) => a - b)
    let first = sortedArr.slice(0, 1)
    let last = sortedArr.slice(-1)
    return arr = [...first, ...last]
}

// ------------------------------------------------------------

// Given three arguments ⁠— an object obj of the stolen items, the pets name and a value ⁠— return an object with that name and value in it(as key - value pairs).

//     Examples
// addName({}, "Brutus", 300) ➞ { Brutus: 300 }

// addName({ piano: 500 }, "Brutus", 400) ➞ { piano: 500, Brutus: 400 }

// addName({ piano: 500, stereo: 300 }, "Caligula", 440) ➞ { piano: 500, stereo: 300, Caligula: 440 }

function addName(obj, name, value) {
    obj[name] = value
    return obj
}

// ------------------------------------------------------------

// Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item.Change will always be represented in the following order: quarters, dimes, nickels, pennies.

// To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.

//     Examples
// changeEnough([2, 100, 0, 0], 14.11) ➞ false

// changeEnough([0, 0, 20, 5], 0.75) ➞ true

// changeEnough([30, 40, 20, 5], 12.55) ➞ true

// changeEnough([10, 0, 0, 50], 3.85) ➞ false

// changeEnough([1, 0, 5, 219], 19.99) ➞ false

function changeEnough(change, amountDue) {
    let [q, d, n, p] = [0.25, 0.10, 0.05, 0.01]
    let quarters = change[0] * q
    let dimes = change[1] * d
    let nickles = change[2] * n
    let pennys = change[3] * p
    return quarters + dimes + nickles + pennys >= amountDue ? true
        : false
}

// ------------------------------------------------------------

// Create a function that squares every digit of a number.

//     Examples
// squareDigits(9119) ➞ 811181

// squareDigits(2483) ➞ 416649

// squareDigits(3212) ➞ 9414

function squareDigits(n) {
    let squared = n.toString().split('').map(i => i * i).join('')
    return Number(squared)
}

// ------------------------------------------------------------

function ascDesNone(arr, str) {
    let [a, b] = arr
    return str === "Asc" ? arr.sort((a, b) => a - b)
        : str === "Des" ? arr.reverse()
            : arr
}

// ------------------------------------------------------------

// Create a function that will remove the letters "a", "b" and "c" from the given string and return the modified version.If the given string does not contain "a", "b", or "c", return null.

//     Examples
// removeABC("This might be a bit hard") ➞ "This might e  it hrd"

// removeABC("hello world!") ➞ null

// removeABC("") ➞ null

function removeABC(str) {
    let regex = /[abc]/g
    let condition = str.replace(regex, '')
    return str === condition ? null
        : condition
}

// ------------------------------------------------------------

// In this challenge you will be given an array similar to the following:

// [[3], 4, [2], [5], 1, 6]
// In words, elements of the array are either an integer or an array containing a single integer.We humans can clearly see that this array can reasonably be sorted according to "the content of the elements" as:

// [1, [2], [3], 4, [5], 6]
// Create a function that, given an array similar to the above, sorts the array according to the "content of the elements".

function sortIt(arr) {
    return arr.sort()
}

// ------------------------------------------------------------

function isBoiling(temp) {
    let fBoil = 212
    let cBoil = 100
    return temp >= fBoil && temp >= cBoil ? true
        : false
}

// ------------------------------------------------------------

// Create a function that takes in a number as a string n and returns the number without trailing and leading zeros.

// Trailing Zeros are the zeros after a decimal point which don't affect the value (e.g. the last three zeros in 3.4000 and 3.04000).
// Leading Zeros are the zeros before a whole number which don't affect the value (e.g. the first three zeros in 000234 and 000230).
// Examples
// removeLeadingTrailing("230.000") ➞ "230"

// removeLeadingTrailing("00402") ➞ "402"

// removeLeadingTrailing("03.1400") ➞ "3.14"

// removeLeadingTrailing("30") ➞ "30"

function removeLeadingTrailing(n) {
    const removeExcess = parseFloat(n)
    return removeExcess.toString();
}

// ------------------------------------------------------------

// Create a function to return the amount of potatoes there are in a string.

//     Examples
// potatoes("potato") ➞ 1

// potatoes("potatopotato") ➞ 2

// potatoes("potatoapple") ➞ 1

function potatoes(str) {
    const numOfPotato = (str.match(/potato/g) || []).length;
    return numOfPotato
}

// ------------------------------------------------------------

// Create a function that returns true if the first array can be nested inside the second.

// arr1 can be nested inside arr2 if:

//     arr1's min is greater than arr2's min.
//         arr1's max is less than arr2's max.
//             Examples
// canNest([1, 2, 3, 4], [0, 6]) ➞ true

// canNest([3, 1], [4, 0]) ➞ true

// canNest([9, 9, 8], [8, 9]) ➞ false

// canNest([1, 2, 3, 4], [2, 3]) ➞ false

function canNest(arr1, arr2) {
    if (Math.min(...arr1) > Math.min(...arr2)
        && Math.max(...arr1) < Math.max(...arr2)) {
        return true
    } return false
}

// ------------------------------------------------------------

// Create a method in the Person class which returns how another person's age compares. Given the instances p1, p2 and p3, which will be initialised with the attributes name and age, return a sentence in the following format:

// { other person name } is { older than / younger than / the same age as} me.

//     Examples
// p1 = Person("Samuel", 24)
// p2 = Person("Joel", 36)
// p3 = Person("Lily", 24)
// p1.compareAge(p2) ➞ "Joel is older than me."

// p2.compareAge(p1) ➞ "Samuel is younger than me."

// p1.compareAge(p3) ➞ "Lily is the same age as me."

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    compareAge(other) {
        return this.age < other.age ? `${other.name} is older than me.`
            : this.age > other.age ? `${other.name} is younger than me.`
                : this.age === other.age ? `${other.name} is the same age as me.`
                    : ''
    }
}

// ------------------------------------------------------------

// Create a function that takes two strings as arguments and returns the number of times the first string(the single character) is found in the second string.

//     Examples
// charCount("a", "edabit") ➞ 1

// charCount("c", "Chamber of secrets") ➞ 1

// charCount("b", "big fat bubble") ➞ 4

function charCount(myChar, str) {
    return [...str].filter(x => x === myChar).length;
}

// ------------------------------------------------------------

