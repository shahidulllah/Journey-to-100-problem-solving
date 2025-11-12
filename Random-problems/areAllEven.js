//Write function which takes a array of number and it will filter whether the numbers all even of not

function areAllNumbersEven(numbers) {
  return numbers.every((number) => number % 2 === 0);
}
