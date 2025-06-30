//PROBLEM:===> 03
//Write a JavaScript program to get the current date.
//Expected Output :
//mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

let today = new Date();
let date = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();

if (date < 10) {
  date = "0" + date;
}

if (month < 10) {
  date = "0" + month;
}

today = date + "-" + month + "-" + year;
