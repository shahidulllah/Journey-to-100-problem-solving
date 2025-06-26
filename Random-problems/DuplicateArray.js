//How can you eliminate duplicate values from a JavaScript array?

const arr = [1, 3, 4, 3, 5, 6, 4, 3, 6, 7, 5, 5, 9, 8];

const newArray = arr.reduce((prev, current) => {
  if (!prev.includes(current)) {
    prev.push(current);
  }

  return prev;
}, []);

