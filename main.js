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