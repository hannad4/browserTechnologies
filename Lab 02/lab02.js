// File Name: lab02.js
// My Name: Daniel Hanna
// Description: This file will create 3 functions within a master function in order to calculate grades after a curve, 
// ............ via the use of shared scope variables


// Creating a master scope function via IIFE convention, such that the function may be immediately invoked
(function() {
	let className = "Not set"; 		// defining variable to hold the class name
	let baseline = 0; 				// defineing variable to hold the baseline number
	let grade = 0; 					// defining variable to hold the grade number
	let curved = 0; 				// defining a variable to hold the final curved grade

	let setClassName = function(name) {		// creating a function that takes in a class name parameter, and sets it to a variable
		className = name; 					// setting className variable equal to the inputted parameter
	}

	let setCurveBaseline = function(numericParam) {		// creating a function that takes in a numeric parameter, and sets it to a variable
		baseline = numericParam;						// setting baseline variable equal to the inputted parameter
	}

	let computeGrade = function(gradeParam) {		// creating a function that takes in a grade parameter, and sets it to a variable
		grade = gradeParam; 						// setting grade variable equal to the inputted parameter
		curved = baseline + (1-baseline/100)*grade; 		// using the set baseline and grade numbers, a final curved grade is calculated

		// Using if else statements to print out appropiate letter based off of grade
		if (curved <= 59) {
			console.log(className + ": F"); 			// Defining numerical standard for grade of F
		} 
		else if (curved >= 60 && curved <= 69) {
			console.log(className + ": D"); 			// Defining numerical standard for grade of D
		}
		else if (curved >= 70 && curved <=79) {
			console.log(className + ": C");				// Defining numerical standard for grade of C
		}
		else if (curved >= 80 && curved <=89) {
			console.log(className + ": B");				// Defining numerical standard for grade of B
		}
		else if(curved >= 90) {
			console.log(className + ": A");				// Defining numerical standard for grade of A
		}
		else {
			console.log(className + ": Error. No grade is calculated"); 	// If for some reason, no grade can be calculated, an error is outputted
		}
		
	}

	 console.log(computeGrade(89)); 		// Testing printing out a grade of 89 (with no set baseline)
	 setCurveBaseline(20); 					// Changing the baseline
	 setClassName("CSC470");				// Changing the class name
	 console.log(computeGrade(89)); 		// Testing printing out the new grade after setting baseline and changing class name
})();