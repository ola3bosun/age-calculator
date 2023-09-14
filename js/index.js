// PRESENT DATES 
var presentDate = new Date();
// YEAR
var presentYear = presentDate.getFullYear();

var birthYear = year.value;
//  MONTH
var presentMonth = 1 + presentDate.getMonth();


var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];  //JAVASCRIPT MONTHS START FROM 0 - 11 (JANUARY IS 0, DECEMBER IS 11)
// DATE
var presentDay = presentDate.getDate();

var birthDay = day.value;
function errorMessageAll(){
   errorMessageDay();
   errorMessageMonth();
   errorMessageYear();
}
function ageCalculator(){

   var birthDay = day.value;
   var birthYear = year.value;
   var birthMonth = month.value;

   if((day.value == "") || (month.value == "" & year.value == "")){
      errorMessageAll();
      return;
   }

   if(document.getElementById("month").value > 12){
     errorMessageMonth();
   }
   else if(birthYear > presentYear){
     errorMessageYear();
   }
   else if(birthDay > 31){
      errorMessageDay();
   }

   else{
      if(birthDay < presentDate){
         presentDate = presentDate + monthDays[presentMonth--];
         presentMonth = presentMonth--;
         
      }
      if(birthMonth > presentMonth ){
         presentMonth = presentMonth + 12;
         presentYear = presentYear--;
      }
     
      var ageInYears = presentYear - birthYear;
      var ageInMonths = presentMonth - birthMonth;
      function monthChecker(){
         if (presentDay < birthDay){
         presentDay += presentDay + monthDays[presentMonth--]/2;
       
      }
      else{
         return;
      }
      }
      monthChecker();
      var ageInDays = Math.floor(presentDay - birthDay);
      // if (ageInDays > 31){
        
      //    ageInDays -= 30;
      // }
      //A FUNCTION THAT CHECKS WHICH VALUE IS GREATER AND MANIPULATES DECREMENTS THE MONTH AND CORRECTLY SUBTRACT BOTH 
      // IF THE PRESENT DAY IS GREATER, ADD 30 AND SUBTRACT
      
      // OUTPUT FIELDS
      // document.getElementsById("ageYear").classList.add("calculating");

      document.getElementById("ageYear").innerHTML = ageInYears;
      document.getElementById("ageMonth").innerHTML = ageInMonths;
      document.getElementById("ageDay").innerHTML = ageInDays;
      
      
   }

  }

 function errorMessageDay(){
    document.getElementById("day").style.borderColor = "hsl(0, 100%, 67%)";
    document.getElementById("month").style.borderColor = "hsl(0, 100%, 67%)";
    document.getElementById("year").style.borderColor = "hsl(0, 100%, 67%)"
    document.getElementById("error").style.visibility = "visible"
    document.querySelectorAll(".unit p")[2].style.color = "hsl(0, 100%, 67%)";
    document.querySelectorAll(".unit p")[1].style.color = "hsl(0, 100%, 67%)";
    document.querySelectorAll(".unit p")[0].style.color = "hsl(0, 100%, 67%)"
 }
 function errorMessageMonth(){
    document.getElementById("day").style.borderColor = "hsl(0, 100%, 67%)";
    document.getElementById("month").style.borderColor = "hsl(0, 100%, 67%)";
    document.getElementById("year").style.borderColor = "hsl(0, 100%, 67%)"
    document.getElementById("errorMonth").style.visibility = "visible"
    document.querySelectorAll(".unit p")[2].style.color = "hsl(0, 100%, 67%)";
    document.querySelectorAll(".unit p")[1].style.color = "hsl(0, 100%, 67%)";
    document.querySelectorAll(".unit p")[0].style.color = "hsl(0, 100%, 67%)";
 }
 function errorMessageYear(){
  document.getElementById("day").style.borderColor = "hsl(0, 100%, 67%)";
  document.getElementById("month").style.borderColor = "hsl(0, 100%, 67%)";
  document.getElementById("year").style.borderColor = "hsl(0, 100%, 67%)"
  document.getElementById("errorYear").style.visibility = "visible"
  document.querySelectorAll(".unit p")[2].style.color = "hsl(0, 100%, 67%)";
  document.querySelectorAll(".unit p")[1].style.color = "hsl(0, 100%, 67%)";
  document.querySelectorAll(".unit p")[0].style.color = "hsl(0, 100%, 67%)";
 }

 // IF 


