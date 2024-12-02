function delay(i) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(i);
    }, i * 1000);
  });
}

//timer function
async function timer(n) {
  console.log("Start timer");
  for (let i = 0; i <= n; i++) {
    const result = await delay(i);
    console.log(result);
  }
  console.log("End timer");
}

timer(5);
