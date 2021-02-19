var number = 0
var numArray = [];

function Robotran(number) {
  number += parseInt($("input#inputI").val());
  for (var i=1; i<=number; i++) {
    numArray.push(i);
  }
  numArray = numArray.toString().split(",");
  for(var j=0; j<numArray.length; j++) {
   if (numArray[j].includes(3) === true) {
     numArray[j] = "Won't you be my neighbor?";
   } else if(numArray[j].includes(2) === true) {
     numArray[j] = "boop";
   } else if (numArray[j].includes(1) === true) { 
     numArray[j] = "beep";
   } else {
     numArray = numArray;
   }
  }  
  numArray = numArray.join(" ");
  return numArray 
}

$(document).ready(function() {
  $('#formR').submit(function(event) {
    Robotran(number);
    $('#hiddenoutput').show();
   $('p').append(numArray);
   event.preventDefault();
   });
  });