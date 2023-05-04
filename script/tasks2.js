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
// var input=prompt("Enter a: Fahrenheit-Celsius \nb: Celsius-Fahrenheit \nc: Radion-Degree \nd: Degree-Radion")

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

