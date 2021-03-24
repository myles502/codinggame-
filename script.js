// variable reference elements in the document

var secondsLeft = 100;
var timerId;
var start = document.querySelector("#start-button")
var timeEl = document.querySelector (".seconds")





start.addEventListener("click", function() {
timerId = setInterval(timer, 1000);
function timer() {
  secondsLeft--;
  if (secondsLeft >=0 )
 timeEl.textContent = secondsLeft + " seconds till end of quiz"
 else if (secondsLeft <= 0 )
 timeEl.textContent =  " YOU LOSE!!!!!!!"
} } ) ;
















  
