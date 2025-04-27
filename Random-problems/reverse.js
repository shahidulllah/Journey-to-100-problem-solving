const reversString = (data) => {
  const stringAsArray = data.split(" ");

  const result = stringAsArray.map((d) => {
    const dataAsArray = d.split("");

    return dataAsArray.reverse().join("");
  });

  return result.join(" ");
};

const string = "My name is Shahidullah";
console.log(reversString(string));
