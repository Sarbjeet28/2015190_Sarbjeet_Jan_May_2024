// function define without parameters
function nameExample(){
    console.log("S");
    console.log("A");
    console.log("R");
    console.log("B");
    console.log("J");
    console.log("E");
    console.log("E");
    console.log("T");
}
// nameExample();

function addtwonumbers(num1, num2){
    console.log(num1+num2);                        
}
addtwonumbers(30,50);

// function define with parameters
function addtwonumbers1(num1, num2){
    // let result= num1+num2
    // return result

    // or
    return num1+num2                         

}
let result= addtwonumbers1(10,20);
// when we console result without writing return statement in function , it gives output as undefined 
console.log("result is: ", result);