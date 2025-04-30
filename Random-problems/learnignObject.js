//using "new" key word
const person = new Object();

person.name = "Shahidullah";
person.age = 23;
person.phone = "01747162648";

// console.log(person);

//Object Constructor function
function Person(name, age, phone) {
  this.name = name;
  this.age = age;
  this.phone = phone;
}

const person1 = new Person("Ali", 12, "63545+");
