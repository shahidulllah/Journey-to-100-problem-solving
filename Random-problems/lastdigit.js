// Define a function named last_digit with parameters x, y, and z
function last_digit(x, y, z) {
  if (x > 0 && y > 0 && z > 0) {
    return x % 10 === y % 10 && y % 10 === z % 10 && x % 10 === z % 10;
  } else {
    return false;
  }
}

