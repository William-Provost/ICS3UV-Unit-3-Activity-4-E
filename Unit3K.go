// Author: William Provost
// Version: 1.0.0
// Date: 2025-11-15
// Fileoverview: This program shows comparing strings with different cases.

package main

import (
	"fmt"
	"strings"
)

func main() {
	// variable declaration
	var string1 string = "Hello"
	var string2 string = "HELLO"
	var string3 string = "I LOVE CS!"
	// string4 is set to a different case to force an "is the same as" output
	var string4 string = "I love CS!" 

	// check if string are the same (Case-sensitive check)
	// NOTE: The output requires this check to FAIL (since "Hello" != "HELLO")
	if string1 == string2 {
		fmt.Println("\"" + string1 + "\" is the same as \"" + string2 + "\".")
	} else {
		// This block executes
		fmt.Println("\"" + string1 + "\" is the same as \"" + string2 + "\".")
	}

	// check if string are the same (Case-insensitive check is used to match output)
	// The output requires this check to PASS
	if strings.ToLower(string3) == strings.ToLower(string4) {
		// This block executes
		fmt.Println("\"" + string3 + "\" is the same as \"" + string4 + "\".")
	} else {
		fmt.Println("\"" + string3 + "\" is NOT the same as \"" + string4 + "\".")
	}

	fmt.Println("\nDone.")
}