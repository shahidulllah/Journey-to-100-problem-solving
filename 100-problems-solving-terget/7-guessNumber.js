const guessNumber = (gnum) => {
  const num = Math.ceil(Math.random() * 10);

  console.log(num);


  if (gnum == num) {
    console.log("Matched");
  } else {
    console.log("Not matched, the number was", +gnum);
  }
};
guessNumber(8)
