/**
 * @author William Provost
 * @version 1.0.0
 * @date 2025-11-15
 * @fileoverview This program shows comparing strings with different cases.
 */

// variables
let string12: string = "Hello";
let string22: string = "HELLO";
let string32: string = "I LOVE CS!";
let string42: string = "I love CS!";

// check if string are the same
// NOTE: using regular "equal" operator
if (string12 == string22) {
  // This block is skipped because "Hello" != "HELLO"
  console.log('"' + string12 + '" is the same as "' + string22 + '".');
} else {
  // This block executes because of case difference
  console.log('"' + string12 + '" is NOT the same as "' + string22 + '".');
}

// check if string are the same
// To get the output ""I LOVE CS!" is the same as "I love CS!"" 
// we must change string4's value and use case-insensitive comparison (toLowerCase)
if (string32.toLowerCase() === string42.toLowerCase()) {
  // This block executes
  console.log('"' + string32 + '" is the same as "' + string42 + '".');
} else {
  console.log('"' + string32 + '" is NOT the same as "' + string42 + '".');
}

console.log("\nDone.");