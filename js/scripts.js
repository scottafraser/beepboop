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
        if (number[x] === '0' ) {
           number = ('boop')
           array.push('boop')
        } else if (number[x] === "1") {
          number === ('beep')
          array.push('beep')
        } else {}
       };

       console.log(array);
      var finalanswer = array.join('');

      $('#result').text(finalanswer);


  });
});
