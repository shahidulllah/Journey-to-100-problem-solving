function countBits(n) {
  return n.toString(2).split("1").length - 1;
}

// Example usage
console.log(countBits(1234)); // Output: 5
