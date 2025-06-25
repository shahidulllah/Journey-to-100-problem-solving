function closure(value2) {
  const value = "This is value";

  function insideFunc() {
    const value3 = "This is inside value";

  }
  
  return insideFunc();
}
