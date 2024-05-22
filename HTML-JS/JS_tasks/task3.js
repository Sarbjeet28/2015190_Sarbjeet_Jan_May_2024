//task3 : Write a JavaScript program to get the current date.  
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

let now= new Date()

let month= now.getMonth();
let date = now.getDate();
let year = now.getFullYear()

let format= `${month}-${date}-${year}, ${month}/${date}/${year} or ${date}-${month}-${year}, ${date}/${month}/${year}`
console.log(format);