let numArray = []
let str = 10

for (var i=1; i<=str; i++) {
  var numbers =+ i;
  numArray.push(i);
}

let numString = numArray.toString().split(",")

for(var j=0; j<=str; j++) {
  if (numString[j].includes(3) === true) {
    numString[j] = "Won't you be my neighbor?"
  } else if(numString[j].includes(2) === true) {
    numString[j] = "boop"
  } else if (numString[j].includes(1) === true) { 
    numString[j] = "beep"
  } else {
    // do nothing
  }
}
let theEnd = numString.join(" ")