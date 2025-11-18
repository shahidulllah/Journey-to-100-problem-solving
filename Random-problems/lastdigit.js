// Define a function named last_digit with parameters x, y, and z
function last_digit(x, y, z) {
  if (x > 0 && y > 0 && z > 0) {
    return x % 10 === y % 10 && y % 10 === z % 10 && x % 10 === z % 10;
  } else {
    return false;
  }
}

// // Log the result of calling last_digit with the arguments 20, 30, and 400 to the console
// console.log(last_digit(20, 30, 400));

// // Log the result of calling last_digit with the arguments -20, 30, and 400 to the console
// console.log(last_digit(-20, 30, 400));

// // Log the result of calling last_digit with the arguments 20, -30, and 400 to the console
// console.log(last_digit(20, -30, 400));

// // Log the result of calling last_digit with the arguments 20, 30, and -400 to the console
// console.log(last_digit(20, 30, -400)); 