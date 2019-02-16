// File Name: lab01.js
// My Name: Daniel Hanna
// Description: This file will perform 3 tasks: perform a math calculation, replace characters in a list of strings, and convert a date
// ............ Please see rest of comments for more details 


// Calculation 1 //////////////////////////////////////////////////////

var number1 = Number(prompt("Please enter your first number")); // Created variable that takes user's first number (ensures it is a number)
var number2 = Number(prompt("Please enter your second number")); // Created variable that takes user's second number (ensures it is a number)
var result = Math.sqrt(number1*number1 + number2*number2); 		// Calculate the result by using Math and performing the calculation
alert(`The square root of those numbers squared and added together is ${result}`); // Notify user of result by using the alert() dialog



// Calculation 2 //////////////////////////////////////////////////////

var List = String(prompt("Please enter a list of strings separated by a comma")); // Created variable that takes user's strings (ensures they are strings)
var NewList = List.replace(/,/g , ';');	// Utilized List.replace with a global flag to replace , with ; 
alert('Here is your new list: ' + NewList);	// Notify of user of result with the alert() dialog



// Calculation 3 //////////////////////////////////////////////////////

var userDate = new Date((prompt("Please enter a date in the form YYYY-MM-DD"))); // Created variable that takes user's date (ensures that it is a date)
var convertedDate = Date.parse(userDate); // Used Date.parse to convert their date to milliseconds (there is an issue where parsing changes the date back 1 day)
var nextDay = Number(convertedDate + 2*24*60*60*1000); // To fix parsing issue (to get desired results), two days worth of milliseconds are added to the parsed date
var newDay = new Date(nextDay); // The new date is then converted from milliseconds back into a date format
alert('The next day would be: ' + newDay); // The user is notified of the new date via the alert() dialog