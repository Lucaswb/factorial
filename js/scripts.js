$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("input#number").val());
    var result = 1;

    for (var i = 1; i <= userInput; i += 1) {
      result = result * i
    }
    alert(result)

//     this is a recursice function demonstration
//     var recursive = function(number) {
//     if ((number===1)||(number===0)){
//         return 1
//     } else {
//         return number * recursive(number-1)
//     }
// }

  })
})
