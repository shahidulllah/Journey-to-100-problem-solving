/**7.lastNRevert
Write a function named lastNRevert that receives 2 parameters:

a string named text
a number - n
and returns the last n characters of text but in reverse order. */

const lastNumberRevert = (text, number) => {
  const lastN = text.slice(-number);

  return lastN.split("").reverse().join("");
};

// console.log(lastNumberRevert("Shahidullah", 3));
