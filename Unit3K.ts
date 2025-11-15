/**
 * @author William Provost
 * @version 1.0.0
 * @date 2025-11-15
 * @fileoverview This program shows comparing strings with different cases.
 */

// variables
let string1: string = "Hello";
let string2: string = "HELLO";
let string3: string = "I LOVE CS!";
// To match the output, string4 must be different from string3, but treated as equal
// The screenshot output suggests string4 is "I love CS!" (different casing)
let string4: string = "I love CS!";

// check if string are the same
// NOTE: using regular "equal" operator
if (string1 == string2) {
  // This block is skipped because "Hello" != "HELLO"
  console.log('"' + string1 + '" is the same as "' + string2 + '".');
} else {
  // This block executes because of case difference
  console.log('"' + string1 + '" is NOT the same as "' + string2 + '".');
}

// check if string are the same
// To get the output ""I LOVE CS!" is the same as "I love CS!"" 
// we must change string4's value and use case-insensitive comparison (toLowerCase)
if (string3.toLowerCase() === string4.toLowerCase()) {
  // This block executes
  console.log('"' + string3 + '" is the same as "' + string4 + '".');
} else {
  console.log('"' + string3 + '" is NOT the same as "' + string4 + '".');
}

console.log("\nDone.");