function range(start, end) {
    var answer = [];
    for (let i = start; i <= end; i++) {
        answer.push(i);
    }
    return answer;
};

function makeRange (make) {
  var rangeNum = (make.join('')).range(0,make)
  return newRange
};

function doubleDigits (two) {
  var inArray = one.toString()
  var stringArray = inArray.split('')
    for (x = 0; x < stringArray.length; x ++) {
      if (stringArray[x] === '1') {
        digitArray.push('Boop!')
        break
      } else if (stringArray[x] === '0' ) {
        digitArray.push('Beep!')
        break
     }
  }
}

function singleDigits(one) {
  var digitArray = []
  for (x = 1; x < one.length; x ++) {
    // if (one[x] !== 0 || one[x] !== 1 && inArray < 10 ) {
    //     digitArray.push(one[x])
       // if (one > 9 ) {
       //  doubleDigits(one)
        if (one[x] === 1) {
        digitArray.push('Boop!')
      } else if (one[x] === 0 ) {
        digitArray.push('Beep!')
      } else if (one[x] !== 0 || one[x] !== 1)
        digitArray.push(one[x])
   }

  return digitArray
  console.log(digitArray);
}


$(document).ready(function() {
  $("form#puzzle").submit(function(event){
      event.preventDefault();
      // var number = splitInput($('#inputNumber').val());
      var number = $('#inputNumber').val();
      var theArray = []
      var array = []

      for (x = 0; x < number.length; x ++) {
        if (number % 3 === 0 && (number[x]) !== '0') {
           array.push("I'm sorry, Dave.")
          break
        } else {
          var boopArray = (range(0, number))
          console.log(boopArray);
          theArray = singleDigits(boopArray)
          array.push(theArray)

        }
       };

      var finalanswer = array

      $('#result').text(finalanswer);
    });
  });
