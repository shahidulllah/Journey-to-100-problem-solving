//Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar. 


const LeapYearFinding = (year) => {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

console.log(LeapYearFinding(2012)); 