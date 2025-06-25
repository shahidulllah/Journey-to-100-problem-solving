function closure(value2) {
  const value = "This is value";

  function insideFunc() {
    const value3 = "This is inside value";

    console.log("Parameter:", value2);
    console.log("Outer value:", value);
    console.log("Inside value:", value3);
  }
  
  return insideFunc();
}
