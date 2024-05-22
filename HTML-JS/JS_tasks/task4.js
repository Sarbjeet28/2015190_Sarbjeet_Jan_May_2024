// task4: Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.

// Triangle sides
let sideA = 5;
let sideB = 6;
let sideC = 7;

function calculateTriangleArea(a, b, c) {
    // Calculate the semi-perimeter
    let s = (a + b + c) / 2;
    
    // Calculate the area using the simple formula
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    
    return area;
}

// Calculate and print the area
let triangleArea = calculateTriangleArea(sideA, sideB, sideC);
console.log("Area of the triangle:", triangleArea);