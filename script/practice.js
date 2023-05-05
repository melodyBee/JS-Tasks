// 11-4-2023
function practice1(){
var x = prompt("Where does the Pope live?");
if (x === "Vatican") {
alert("Correct!");
}
var x = prompt("Where does the Pope live?");
var correctAnswer = "Vatican";
if (x == correctAnswer) {
score++;
userIQ = "genius";
alert("Correct! ");
}
}

// 12-4-23
//Creating a table
function table(){
var j=parseInt(prompt("Type which number of the table you want"));
for(i=1;i<=10;i++)
{
    result= j*i;
    console.log( j +"x" +i+"="+ result)
}
}
//Creating functions
function func1(){
  console.log("This is how you create a function");
}
// func1();
//------------------------------------------------------------------------------------------------------------------------------------------------------------
//practice
function normalformdate(){
var something= new Date();
var date= something.getDate();
var month= something.getMonth()+1;
var year=something.getFullYear();
console.log(date+"/"+month+"/"+year );
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------
// 29-4-2023
// Leap Year or not
function LeapYear() {
    var ThisYear = new Date().getFullYear();
    var x= new Date(ThisYear, 1, 29).getDate()==29;
    if (x) {
      console.log("This year is a leap year");
    } else {
      console.log("This year is not a leap year");
    }
  }
//   LeapYear();
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
//Leap Year in future
function tenYears(){
  var now= new Date().getFullYear();
  for(i=0;i<9;i++){
    var year=now++;
    var x= new Date(year, 1, 29).getDate()==29;
    if (x) {
      console.log(year+" "+"is a leap year");
    } else {
      console.log(year+" "+ "is not a leap year");
    }
  }
}
// tenYears();
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
// OTP
function OTP(){
  var OTP=(Math.random()*+1000)*(Math.random()*1000);
  OTP= Math.round(OTP);
  return OTP;
}
var getOTP = OTP();
console.log(getOTP);
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
// Make a function that converts strings into capital case
function Capitilizing(x){
  var x= x.toUpperCase();
  alert(x);
}
// x= prompt("Enter string you want capitalized")
// Capitilizing(x);
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
//Age Calculation
function age(user,currntyear){
  var Age= currntyear-user;
  alert(Age);
}
  // var user= prompt("Birth Year");
  // var currntyear= new Date().getFullYear();
  // age(user,currntyear);
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
