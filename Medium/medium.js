/*MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console that number
 and its corresponding month. For example: if the user enters the number 3, then it should return the month “March.” 
`Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12). */


var  months = ["Months","January", "February", "March", "April", "May", 
"June", "July", "August", "September", "October", "November", "December"];

var birthMonth = window.prompt("What month were you born(1-12)?");

console.log(`I was born in ` + months[birthMonth]);

