function splitInput (number) {
  var inArray = number.toString()
  var stringArray = inArray.split('')
  return stringArray
};

function range(start, end) {
    var answer = [];
    for (let i = start; i <= end; i++) {
        answer.push(i);
    }
    return answer;
};

function makeRange (make) {
  var rangeNum = (parseInt(make.join(''))).range(0,make)
  return newRange
};

$(document).ready(function() {
  $("form#puzzle").submit(function(event){
      event.preventDefault();
      var number = splitInput($('#inputNumber').val());
      var realNumber = $('#inputNumber').val();
      var boopArray = []
      var array = []

      for (x = 0; x < number.length; x ++) {
        if (parseInt(number.join('')) % 3 === 0 && (number[x]) !== '0') {
           array.push("I'm sorry, Dave.")
          break
        } else if (number[x] !== '0' || number[x] !== '0' ) {
          boopArray.push(range(0,realNumber))
          for (i = 0; i < boopArray.length; i ++) {
            if (boopArray[x] === 1) {
              boopArray.push('beep')
            } else if (boopArray[x] === 0 ) {
              boopArray.push('boop')
            }
           console.log(boopArray);
          };

        // } else if (number[x] === "1") {
        //   array.push('beep')
        // } else if (number[x] === '0' ) {
        //   array.push('boop')
        //   break

        } else {}
       };

      var finalanswer = array

      $('#result').text(finalanswer);


  });
});
