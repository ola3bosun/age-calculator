// PRESENT DATE VARIABLES
var presentDate = new Date(); // current date
var presentYear = presentDate.getFullYear(); // current year
var presentMonth = presentDate.getMonth() + 1; // Javascript numbers are zero-indexed (January = 0 and December = 11)
var presentDay = presentDate.getDate(); // current day

// MONTH DAYS ARRAY
var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // Number of days in each month


// AGE CALCULATOR FUNCTION
function ageCalculator() {

    resetErrorMessages();
    var birthDay = parseInt(day.value);
    var birthMonth = parseInt(month.value);
    var birthYear = parseInt(year.value);

    // VALIDATION: Check if any field is empty or invalid
    if (!birthDay || !birthMonth || !birthYear) {
        errorMessageAll();
        return;
    }

    if (birthMonth > 12) {
        errorMessageMonth();
        return;
    } else if (birthYear > presentYear || (birthYear === presentYear && birthMonth > presentMonth)) {
        errorMessageYear();
        return;
    } else if (birthDay > 31 || (birthMonth === 2 && birthDay > 29)) {
        errorMessageDay();
        return;
    }

    // CALCULATING AGE
    var ageInYears = presentYear - birthYear;

    // If the birthday hasn't been celebrated yet this year, subtract a year
    if (birthMonth > presentMonth || (birthMonth === presentMonth && birthDay > presentDay)) {
        ageInYears--;
    }

    // CALCULATE MONTHS AND DAYS
    var ageInMonths = presentMonth - birthMonth;
    var ageInDays = presentDay - birthDay;

    // Adjust days if negative
    if (ageInDays < 0) {
        var lastMonth = presentMonth - 1; // Get the previous month
        if (lastMonth < 0) {
            lastMonth = 11; // Wrap around to December if month is negative
        }
        ageInDays += monthDays[lastMonth]; // Add days from the previous month
        ageInMonths--; // Borrow a month
    }

    // Adjust months if negative
    if (ageInMonths < 0) {
        ageInMonths += 12;
    }

    // OUTPUT THE RESULTS
    document.getElementById("ageYear").innerHTML = ageInYears;
    document.getElementById("ageMonth").innerHTML = ageInMonths;
    document.getElementById("ageDay").innerHTML = ageInDays;
}

// ERROR MESSAGE FUNCTIONS
function errorMessageDay() {
    document.getElementById("day").style.borderColor = "hsl(0, 100%, 67%)";
    document.getElementById("error").style.visibility = "visible";
    document.querySelectorAll(".unit p")[0].style.color = "hsl(0, 100%, 67%)";
}

function errorMessageMonth() {
    document.getElementById("month").style.borderColor = "hsl(0, 100%, 67%)";
    document.getElementById("errorMonth").style.visibility = "visible";
    document.querySelectorAll(".unit p")[1].style.color = "hsl(0, 100%, 67%)";
}

function errorMessageYear() {
    document.getElementById("year").style.borderColor = "hsl(0, 100%, 67%)";
    document.getElementById("errorYear").style.visibility = "visible";
    document.querySelectorAll(".unit p")[2].style.color = "hsl(0, 100%, 67%)";
}

function errorMessageAll() {
   errorMessageDay();
   errorMessageMonth();
   errorMessageYear();
}

 function resetErrorMessages(){
    document.getElementById("day").style.borderColor = "hsl(0, 0%, 86%)";
    document.getElementById("error").style.visibility = "hidden";
    document.querySelectorAll(".unit p")[0].style.color = "hsl(0, 1%, 44%)";
    document.getElementById("month").style.borderColor = "hsl(0, 0%, 86%)";
    document.getElementById("errorMonth").style.visibility = "hidden";
    document.querySelectorAll(".unit p")[1].style.color = "hsl(0, 1%, 44%)";
    document.getElementById("year").style.borderColor = "hsl(0, 0%, 86%)";
    document.getElementById("errorYear").style.visibility = "hidden";
    document.querySelectorAll(".unit p")[2].style.color = "hsl(0, 1%, 44%)";
 }
