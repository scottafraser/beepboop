function splitInput (number) {
  var inArray = number.toString()
  var stringArray = inArray.split('')
  return stringArray
};

$(document).ready(function() {
  $("form#puzzle").submit(function(event){
      event.preventDefault();
      var number = $('#inputNumber').val();

      for (x = 0; x < letters.length; x ++) {
        if (letters[x] === vowels[j]) {
           letters[x] = ("-")
           array.push(j)
        } else {
         array.push()}
      };

      var finalanswer = letters.join('');

      $('#result').text(finalanswer);


  });
});
