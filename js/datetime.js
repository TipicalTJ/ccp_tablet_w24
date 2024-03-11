// JavaScript for clock and date

let hour = document.getElementById("hour");
let min = document.getElementById("minutes");
let date = document.getElementById("current-date");

setInterval(()=>{

let currentTime = new Date();

hour.innerHTML = notMilitaryTime(currentTime.getHours());
min.innerHTML = (currentTime.getMinutes() < 10 ? '0' : '') + currentTime.getMinutes();
date.innerHTML = whatDayIsIt(currentTime.getDay()) + ", " + whatMonthIsIt(currentTime.getMonth()) + " " + currentTime.getDate() + ", " + currentTime.getFullYear();

}, 1000)

// Function to set time to what people normally see

function notMilitaryTime(time) {
    if(time > 12) {
        return time -= 12
    }
}

// Creating a way to get the string for what day of the week it is

const dayDictionary = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
}

function whatDayIsIt(weekdayNumber) {
    return dayDictionary[weekdayNumber];
}

// Creating a way to get what month of the year it is

const monthDict = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
}

function whatMonthIsIt(monthNumber) {
    return monthDict[monthNumber];
}

// Was not sure how to get both 0's in minutes