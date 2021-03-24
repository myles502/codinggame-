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

var todos = [];

// TODO: What is the purpose of this function? //display todo list just writing this twice
function renderPoints() {
  // TODO: Describe the functionality of the following two lines of code. make to do list appear 
  todoList.innerHTML = ""; //intitalizing todo re setting 
  todoCountSpan.textContent = todos.length; //display number of todo or the counter updates 
  
  // TODO: Describe the functionality of the following `for` loop.
  for (var i = 0; i < points.length; i++) {
    var points = points[i]; //for every iteration of for loop adds item by one 

    var li = document.createElement("li");
    li.textContent = points;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete ✔️";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}






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
  var element = event.target; window.alert ("points!!!!")
  











} ) ;
  
  












