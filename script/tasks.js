
// Task:1 Zakah calclation
function Zcal(){
var zakat_percentage= 0.025;
var user_input=prompt("Enter your number","00");
var result= +user_input*zakat_percentage;
alert("your zakat value is "+ result);
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
// Task:2 Fitrah calculation
function Fcal(){
var familyMembers=prompt("Enter total number of family members");
var Form_of_fitrah=prompt("Enter the number of which form you want:\n1.Wheat 250 rs\n2.Groats 450 rs\n3.Dates 2100 rs\n4.Rasins 2800 rs");
 if(Form_of_fitrah==1){
    var w= 250*familyMembers;
    alert("Fitrah amount this year is="+w);
 }
 else if(Form_of_fitrah==2)
 {
    var x= 450*familyMembers;
    alert("Fitrah amount this year is=" + x);
 }
 else if(Form_of_fitrah==3)
 {
    var y= 2100*familyMembers;
    alert=("Fitrah amount this year is="+y);
 }
else if(Form_of_fitrah==4)
{
var z= 2800*familyMembers;
alert=("Fitrah amount this year is="+z);
}
else
{
    alert("wrong entry")
}
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------
//12-4-2023
// Task:3 Secret number
function numberguess(){
var SecretNumber= 6;
var num=prompt("Guess a number between 1-10");
if(num>SecretNumber)
{
    alert("Your number is greater than the secret number");
}
else if(num<SecretNumber)
{
    alert("Your number is Less than the secret number");
}
else{
    alert("Congrats you guessed it correct");
}
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------
// Task:4 Capitilizing first letter
function name(){
var name1=prompt("Enter your name");
var x= name1.slice(0,1).toUpperCase();
var y= name1.slice(1).toLowerCase();
var z= x.concat(y);
alert(z);
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------
//Task:5 
function userinfo(){
var contactNames=[];
var contactNumbers=[];
for(i=0;i<3;i++)
{
   var x=prompt("enter you user name");
   var y= prompt("enter your number");
   contactNames.push(x);
   contactNumbers.push(y);
}

for(j=0;j<3;j++)
{
    var name2=contactNames[j];
    var number2=contactNumbers[j];
console.log(name2 + number2);
}
}
//------------------------------------------------------------------------------------------------------------------------------------------------
//Task:6
function proPosition() {
var products=['Ketchup','Mayonnaise','Mustard','BBQ Sauce'];
var position=prompt("Enter the number of the product you want:\n1.Ketchup\n2.Mayonnaise\n3.Mustard\n4.BBQ Sauce");
Removed_item=products.slice(position -1 ,position)
console.log(Removed_item);
}
//--------------------------------------------------------------------------------------------------------------------------------------------------
//Task:7

// var nationality=prompt("Enter your nationality");
// var age=prompt("Enter your age");
// var gender=prompt("Enter your gender\n1.male\n2.female");

// if(nationality=="Pakistani"||"Indian")
// {
//     if(gender==1 && age>18){
//         alert("you are eligeble to vote");
//     }
//     else if(gender==2 && age>18)
//     {
//         var maritalStatus=prompt("Enter \n1. If you are married. \n2.If you are not.")
//         if(maritalStatus==1)
//         {alert("You are eligible to vote");
//         }
//         else{
//             alert("You are not eligible to vote");
//         }
//     }
//     else{alert("wrong entery");}
// }
// else{
//     alert=("you are not eligible to vote");
// }

//--------------------------------------------------------------------------------------------------------------------------------------------------
//14-4-2023
//Task:8

// var WorldCupSquad=['Babar Azam' ,  'Shadab Khan' ,  'Asif Ali' ,  'Fakhar Zaman' ,  'Haider Ali' ,  'Haris Rauf' ,  'Iftikhar Ahmed' ,  'Khushdil Shah',  'Mohammad Hasnain' ,  'Mohammad Nawaz' ,  'Mohammad Rizwan' ,  'Mohammad Wasim' ,  'Naseem Shah' ,  'Shaheen Shah Afridi' ,  'Shan Masood'];
// console.log(WorldCupSquad);
// console.log(WorldCupSquad.length);
// final_team=WorldCupSquad.slice(0,11);
// console.log(final_team)
// console.log(final_team.length);
//--------------------------------------------------------------------------------------------------------------------------------------------------


function a (Celsius){

    var Fahrenheit= Celsius* 1.8 + 32;
    alert(Fahrenheit);
    }


//---------------------------------------------------------------------------------------------------------------------------------------------------------

function b (Fahrenheit){

    var Celsius=(Fahrenheit - 32) * 5/9;
    alert(Celsius);
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------

function c(Degree){

    var Radion=Degree*3.14/180;
    alert(Radion);
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------

function d(Radion){

    var Degree= Radion*180/3.14;
    alert(Degree);
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------
// var input=prompt("Enter a:Celsius-Fahrenheit  \nb: Fahrenheit-Celsius \nc: Radion-Degree \nd: Degree-Radion")

// switch (input){
//     case "a": var Celsius= prompt("Enter celcius");
//      a(Celsius);
//      break;
//     case "b": var Fahrenheit= prompt("Enter fahrenheit");
//      b(Fahrenheit);
//      break;
//     case "c": var Degree= prompt("Enter Degree");
//      c(Degree);
//      break;
//      case "d": var Radion= prompt("Enter Radion");
//      d(Radion);
// }
//---------------------------------------------------------------------------------------------------------------------------------------------------------



