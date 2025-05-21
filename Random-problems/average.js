function average(arr) {
  if (arr.length === 0) return 0;
  const sum = arr.reduce((total, num) => total + num, 0);
  return sum / arr.length;
}

const array = [2, 3, 4, 5];
console.log(average(array));
