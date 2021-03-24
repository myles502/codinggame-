// variable reference elements in the document
var pointsInput = document.querySelector ("#points")
var secondsLeft = 100;
var timerId;
var start = document.querySelector("#start-button")
var timeEl = document.querySelector (".seconds")
var ansOne = document.querySelector ("#question-one")
var ansTwo = document.querySelector ("#question-two")
var ansThree = document.querySelector ("#question-three")


var points = [];







start.addEventListener("click", function() {
timerId = setInterval(timer, 1000);
function timer() {
  secondsLeft--;
  if (secondsLeft >=0 )
 timeEl.textContent = secondsLeft + " seconds till end of quiz"
 else if (secondsLeft <= 0 )
 timeEl.textContent =  " YOU LOSE!!!!!!!"
} } ) ;



ansOne.addEventListener("click", function(event) { 
  timerId = setInterval (timer,1000);
  function timer() {
    secondsLeft++;
    if (secondsLeft >= 0 )
timeEl.textContent = secondsLeft + " points!!!"
else if (secondsLeft <= 0)
timeEl.textContent = " YOU LOSE!!!!!!!"
 } } ) ;
  
ansTwo.addEventListener("click", function(event) { 
  timerId = setInterval (timer,1000);
  function timer() {
    secondsLeft--;
    if (secondsLeft >= 0 )
timeEl.textContent = secondsLeft + " wrong!!!"
else if (secondsLeft <= 0)
timeEl.textContent = " YOU LOSE!!!!!!!"
 } } ) ;
  
 ansThree.addEventListener("click", function(event) { 
  timerId = setInterval (timer,1000);
  function timer() {
    secondsLeft--;
    if (secondsLeft >= 0 )
timeEl.textContent = secondsLeft + " very wrong!!!"
else if (secondsLeft <= 0)
timeEl.textContent = " YOU LOSE!!!!!!!"
 } } ) ;
  









  
  












