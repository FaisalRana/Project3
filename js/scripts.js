var str1 = 0
var numArray = [];
var numArrayS = [];
$(document).ready(function() {
  $("#formR").submit(function(event) {
    alert("hello");
    str1 += parseInt($("input#inputI").val());
    for (var i=1; i<=str1; i++) {
      numArray.push(i);
    }
    numArray = numArray.toString().split(",");
    numArrayS = numArray

    for(var j=0; j<numArrayS.length; j++) {
     if (numArrayS[j].includes(3) === true) {
       numArrayS[j] = "Won't you be my neighbor?";
     } else if(numArrayS[j].includes(2) === true) {
       numArrayS[j] = "boop";
     } else if (numArrayS[j].includes(1) === true) { 
       numArrayS[j] = "beep";
     } else {
       numArray = numArray;
     }
   }  

   alert(numArrayS)

       event.preventDefault();

   });
  });