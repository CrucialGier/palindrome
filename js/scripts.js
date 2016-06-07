$(document).ready(function() {
 $("form").submit(function(event) {
   debugger;
   //sentence gets turned into array of chars received from user
   var sentence = $("#sentence").val();
   var reverseArray = [];

   for (var i = 0; i < sentence.length; i ++)
   {
     reverseArray.push(sentence.charAt(i));
   }
    var reverse = reverseArray.reverse().join("");

   //new array created - it is reversed sentence
    if (sentence === reverse) {
      alert ("It's palindrome!!!!!!!!");
    }
    else {
      alert("try again");
    };
  });
});
