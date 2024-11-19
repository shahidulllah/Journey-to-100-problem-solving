/*
PROBLEM:===> 01
Write a JavaScript program to display the current day and time in the following format.
Today is : Tuesday.
Current time is : 10 PM : 30 : 38

TO DO:
==================
1.Get the current date and time
2.Get the day of week (0-6, where 0 is Sunday and 6 is Saturday)
3.Get the Array of day Names
4.Check the dislplay of current day.
5.Get the current hour, minute, second
6.Determine if its AM or PM
7.Convert formate 24 to 12hour
8.Check special cases when hour is 0 and PM.
9.Check special cases when hour is 0 and AM.
10.Now ready to display the current time
*/

//SOLUTION//
const today = new Date();
const day = today.getDay();
const dayList = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

let hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();

let prepand = (hour >= 12) ? 'PM' : 'AM';
hour = (hour >= 12) ? hour - 12 : hour;

if(hour === 0 && prepand === 'PM'){
    if(minute === 0 && second === 0){
        hour = 12;
        prepand = "Noon"
    }else{
        hour = 12;
        prepand = 'PM'
    }
}

if(hour === 0 && prepand === 'AM'){
    if(minute === 0 && second === 0){
        hour = 12;
        prepand = "Mid-night"
    }else{
        hour = 12;
        prepand = 'AM'
    }
}

console.log("Current Time: "+ hour + ":" + minute + ":" + second + " " + prepand); 
