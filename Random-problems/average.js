//method 1
function average1(arr) {
  if (arr.length === 0) return 0;
  const sum = arr.reduce((total, num) => total + num, 0);
  return sum / arr.length;
}

//method 2
function average2(arr) {
  if (arr.length === 0) return 0;
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum / arr.length;
}

const array = [2, 3, 4, 5];
console.log(average2(array));
