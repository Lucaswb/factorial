$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("input#number").val());
    var result = 1;

    for (var i = 1; i <= userInput; i += 1) {
      result = result * i
    }
    alert(result)

  })
})
