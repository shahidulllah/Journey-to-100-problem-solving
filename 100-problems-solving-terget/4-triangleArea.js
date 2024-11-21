//PROBLEM===> 04
//Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.

const side1 = 5;
const side2 = 6;
const side3 = 7;

const s = (side1 + side2 + side3) / 2;

const area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3))).toFixed(2)

console.log(area);