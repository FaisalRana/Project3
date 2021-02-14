
var str1 = 0
$(document).ready(function() {
  $("#formR").submit(function(event) {
    alert("hello");
    str1 += parseInt($("input#inputI").val());
    event.preventDefault();
  });
});

var numArray = [];
for (var i=1; i<=str1; i++) {
  numArray.push(i);
}
var numString = numArray.toString().split(",");
for(var j=0; j<=numString.length; j++) {
  if (numString[j].includes(3) === true) {
    numString[j] = "Won't you be my neighbor?";
  } else if(numString[j].includes(2) === true) {
    numString[j] = "boop";
  } else if (numString[j].includes(1) === true) { 
    numString[j] = "beep";
  } else {
    var nothing = "nothing";
  }
}
