// a function to convert Celsius to Fahrenheit.
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

console.log(celsiusToFahrenheit(0)); // 32
console.log(celsiusToFahrenheit(25)); // 77


// a function for check even number 
function isEven(num) {
    return (num % 2 == 0 ? true : false);
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false


// a function for sum two number 
function sum(a, b) {
    return a + b;
}

console.log(sum(3, 4)); // 7
console.log(sum(10, 20)); // 30



// A function for find Smallest Number in an array
function findSmallestNum(arr) {
    return Math.min.apply(Math, arr);
}

console.log(findSmallestNum([3, 5, 1, 9])); // 1
console.log(findSmallestNum([-1, -5, 0, 10])); // -5



// A function to count the number of vowels in a string.
function countVowels(str) {
    let vowels = /[aeiouAEIOU]/g;
    let findVowels = str.match(vowels);
    if (findVowels) {
        return "Number of vowel is " + findVowels.length;
    }
    else {
        return "Number of vowel is " + 0;
    }
}

console.log(countVowels("hello world")); // 3
console.log(countVowels("Javascript")); // 3




// a function to get the first element of an array
function getFirstElement(arr) {
    return arr[0];
}

console.log(getFirstElement([1, 2, 3])); // 1
console.log(getFirstElement(["a", "b", "c"])); // "a"



// A function to check if an array is empty.
function isArrayEmpty(arr) {
    let checkArray = arr.length;
    return checkArray == 0 ? true : false;
}

console.log(isArrayEmpty([])); // true
console.log(isArrayEmpty([1, 2, 3])); // false



// a function to return the factorial of a number
function factorialize(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorialize(num - 1);
}

console.log(factorialize(5)); // 120
console.log(factorialize(7)); // 5040



// a function to reverse a string.
function reverseString(str) {
    let splitString = str.split("");
    let reverseString = splitString.reverse();
    let join = reverseString.join("");

    return join;
}

console.log(reverseString("hello")); // "olleh"
console.log(reverseString("world")); // "dlrow"



// a function to convert a string to lowercase
function toLowerCase(str) {
    let lowerString = str.toLowerCase();
    return lowerString;
}

console.log(toLowerCase("HELLO WORLD")); // "hello world"
console.log(toLowerCase("JavaScript")); // "javascript"



// A function to find the length of a string
function stringLength(str) {
    let strLength = str.length;
    return strLength;
}

console.log(stringLength("hello")); // 5
console.log(stringLength("world")); // 5


// a function to merge two arrays.
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeArrays(["a", "b"], ["c", "d"])); // ["a", "b", "c", "d"]


// a function to get the last element of an array. 
function getLastElement(arr) {
    let length = arr.length;
    let lastElement = length - 1;

    return arr[lastElement];
}

console.log(getLastElement([1, 2, 3])); // 3
console.log(getLastElement(["a", "b", "c"])); // "c"


// a function to get the first character of a string. 
function getFirstCharacter(str) {
    return str.charAt(0);
}

console.log(getFirstCharacter("hello")); // "h"
console.log(getFirstCharacter("world")); // "w"



// a function to find the sum of all elements in an array
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumArray([1, 2, 3, 4])); // 10
console.log(sumArray([-1, -2, -3, -4])); // -10
console.log(sumArray([1.5, 2.5, 3.5])); // 7.5

