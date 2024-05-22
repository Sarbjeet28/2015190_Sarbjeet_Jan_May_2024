// task 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

let now= new Date()
let currentDay= now.toLocaleDateString('en-IN', { weekday: 'long' });

let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
let amOrPm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format

let Dayformat = `Today is: ${currentDay}.`; 
let timeformat= `Current time is: ${hours} ${amOrPm} : ${minutes} : ${seconds}`;

console.log(Dayformat);
console.log(timeformat);
