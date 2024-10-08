/******************************************************************************
Functions and Methods assignment

Read the assignment text CAREFULLY. Show some examples in your code that tests
your functions and methods. Use a variation of arrow functions and 
function keyword functions.

Add comments to your code that briefly describe what your code does.

1.

Make the following function:

The function should take in a number as a parameter and return
"Odd" if the number received is an odd number and "Even" if the number
received is an even number.

******************************************************************************/

// function evenOrOdd(num) {
//   if (num % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }
// const result = evenOrOdd(111);

// console.log(result);

/******************************************************************************
2.

Make the following function:

The function should take in a string as a parameter and return the string 
in upper case with an exclamation mark at the end.

Example: "This is cool" should return "THIS IS COOL!"

******************************************************************************/
// function toUpperCaseNameWithExclamation(cool) {
//   return cool.toUpperCase() + "!";
// }
// console.log(toUpperCaseNameWithExclamation("This is cool"));

/******************************************************************************
3.

Make the following function:

The function should take in 2 parameters:

 - A name (string)
 - An hour of the day (number)

The function should return:
"Invalid time" if the hour received is less than 0
"Good night (name received)" if the hour received is 0-5
"Good morning (name received)" if the hour received is 6-11
"Good day (name received)" if the hour received is 12-17
"Good evening (name received)" if the hour received is 18-23
"Invalid time" if the hour received is greater than 23

If no hour is received, your function should return an error message.

******************************************************************************/

// function greeting(name, hour) {
//   if (hour < 0) {
//     return `invalid time`;
//   } else if (hour >= 0 && hour < 5) {
//     return `Good night ${name}`;
//   } else if (hour >= 6 && hour < 11) {
//     return `Good morning ${name}`;
//   } else if (hour >= 12 && hour < 17) {
//     return `Good day ${name}`;
//   } else if (hour >= 18 && hour < 23) {
//     return `Good evening ${name}`;
//   } else if (hour > 23) {
//     return `invalid time`;
//   } else {
//     return "error";
//   }
// }

// let result = greeting("pål", 23);
// console.log(result);

/******************************************************************************
4.

Make the following function:

The function should take in an array as a parameter, and return the array 
with the first and last index removed.

Example 1: ["Red", "Green", "Blue", "Yellow"] should return ["Green", "Blue"]

Example 2: ["One", "Two", "Three", "Four", "Five", "Six"] should return
["Two", "Three", "Four", "Five"]
******************************************************************************/
// const fruits = ["Red", "Green", "Blue", "Yellow"];
// fruits.pop();
// fruits.shift();

// console.log(fruits);

// const fruits = ["One", "Two", "Three", "Four", "Five", "Six"];
// fruits.pop();
// fruits.shift();

// console.log(fruits);
/******************************************************************************
5.

Make the following function:

The function should take in a string as a parameter.

Use string methods on the text parameter you receive to do the following:
 - Replace the word 'hard' with 'fun'
 - Remove the whitespace from the beginning and end of the string
 
Then return the string.

Example1: "  Javascript is hard   " should return "Javascript is fun"
Example2: " It's hard to use methods " should return "It's hard to use methods"
Example3: "   hard        " should return "fun"

******************************************************************************/
//Example1

// let text = "  Javascript is hard   ";
// let trimmedText = text.trim();
// let result = trimmedText.replace("hard", "fun");

// console.log("final result", result);

//Example2

// let text = " It's hard to use methods ";
// let result = text.trim();

// console.log(result);

//Example3

// let text = "   hard        ";
// let trimmedText = text.trim();
// let result = trimmedText.replace("hard", "fun");

// console.log(result);

/******************************************************************************
6.

Use array methods to do the following:

 - Remove the first hero of the array (Spider-Man)
 - Replace "Doctor Strange" with "Skrull"
 - Use the splice method to remove Thor and Hulk and add "Captain America"
 - Join the array to a string with "💪" between each hero

******************************************************************************/

// const heroes = [
//   "Spider-Man",
//   "Thor",
//   "Hulk",
//   "Doctor Strange",
//   "Iron Man",
//   "Black Widow",
// ];

// heroes.shift();

// heroes.splice(2, 1, "Skrull");

// heroes.splice(0, 2, "Captain America");

// const result = heroes.join("💪");

// console.log(result);

/******************************************************************************
7.

EXTRA CHALLENGE

This is not mandatory, only for those who want an extra challenge.

Make the following function:

The function should take in 1 parameter.

If the parameter received is a string: 
Return the string with "😎" added to the beginning and end

If the parameter received is a number:
Double it, convert it to a string and return it with "😎" added to the 
beginning and end.

If the parameter received is a boolean:
If the parameter received is true, return "😎Yeah😎". If the parameter received
is false, return "😎Chill😎"

If the parameter received is any other datatype:
Return "😎Primitive values only😎"

******************************************************************************/
function isString(value) {
  if (typeof value === `string`) {
    return "😎" + value + "😎";
  }

  return "not a string";
}
console.log(isString("this is string"));

/******************************************************************************
8.

EXTRA CHALLENGE #2:

This is not mandatory, only for those who want an extra challenge.

Make the following function:

The function should take in 2 parameters, 1 array and 1 string.

Inside your function, check if the array received contains the string received.
If it does, remove that element from the array and return it.

If the array does not contain the string, add that string to the end of the 
array and return it.

Example1: (["Red", "Green"], "Blue") --> ["Red", "Green", "Blue"]
Example2: (["Red", "Green", "Blue"], "Green")) --> ["Red", "Blue"]
Example3: (["One", "Two", "Three"], "Four") --> ["One", "Two", "Three", "Four"]
Example4: (["One", "Two", "Three"], "Two") --> ["One", "Three"]
******************************************************************************/
