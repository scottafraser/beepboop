function splitInput (number) {
  var inArray = number.toString()
  var stringArray = inArray.split('')
  return stringArray
};

$(document).ready(function() {
  $("form#puzzle").submit(function(event){
      event.preventDefault();
      var number = splitInput($('#inputNumber').val());
      var array = []

      for (x = 0; x < number.length; x ++) {
        if (parseInt(number.join('')) % 3 === 0 && (number[x]) !== '0') {
           array.push("I'm sorry, Dave.")
          break
        } else if (number[x] === "1") {
          array.push('beep')
          break
        } else if (number[x] === '0' ) {
          array.push('boop')
          break
        } else {}
       };
       
      var finalanswer = array

      $('#result').text(finalanswer);


  });
});
