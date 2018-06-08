function splitInput (split) {
  var inArray =[]
  inArray.push(split)
  inArray.split('')
  return inArray
};


  $("form#puzzle").submit(function(event){
      event.preventDefault();


      var letters = sentence.split("");
      var array = []

      for (x = 0; x < letters.length; x ++) {
        for (j = 0; j < vowels.length; j ++ )
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
