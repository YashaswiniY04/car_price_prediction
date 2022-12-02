function scrolll(){
  var left=document.querySelector(".scroll-images");
  left.scrollBy(620,0)
}
function scrolllr(){
  var right=document.querySelector(".scroll-images");
  right.scrollBy(-620,0)
}

function scr(){
  var left=document.querySelector(".scroll-imags");
  left.scrollBy(320,0)
}
function scro(){
  var right=document.querySelector(".scroll-imags");
  right.scrollBy(-320,0)
}
function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

var questions = [
  'Whats your name ?',
  'Where are you from?',
  'What\'s your age?',
  'What car you are looking for?',
  'Can we get you Phone number we will get back to you',
  'It was nice talking you, we will get back :)'
];
var num = 0;

var inputBox = document.querySelector("#ans");
var output = document.querySelector("#result");
output.innerHTML = questions[num];

function showResponse() {
var input = inputBox.value;
if(inputBox.value == "") {
  
}else {
  if(num == 0) {
    output.innerHTML = `${input}`;
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Wait for 2 secs");
    ++num;
    setTimeout(changeQuestion, 2000);
  } else
if(num == 0) {
  output.innerHTML = `Hii ${input} Hope you are doing good`;
  inputBox.value = "";
  inputBox.setAttribute("placeholder", "Wait for 2 secs");
  ++num;
  setTimeout(changeQuestion, 2000);
} else if(num == 1) {
  output.innerHTML = `${input} must be a good place`;
  inputBox.value = "";
  inputBox.setAttribute("placeholder", "Wait for 2 secs");
  ++num;
  setTimeout(changeQuestion, 2000);
} else if(num == 2) {
  output.innerHTML = `So you are ${2017 - input} born`;
  inputBox.value = "";
  inputBox.setAttribute("placeholder", "Wait for 2 secs");
  ++num;
  setTimeout(changeQuestion, 2000);
} else if(num == 3) {
  output.innerHTML = `Awesome ${input}`;
  inputBox.value = "";
  inputBox.setAttribute("placeholder", "Wait for 2 secs");
  ++num;
  setTimeout(changeQuestion, 2000);
} else if(num == 4) {
  output.innerHTML = ` ${input}`;
  inputBox.value = "";
  inputBox.setAttribute("placeholder", "Wait for 2 secs");
  ++num;
  setTimeout(changeQuestion, 2000);
}
}
}

function changeQuestion() {
inputBox.setAttribute("placeholder", "Enter your response");
output.innerHTML = questions[num];
if(num == 5) {
  inputBox.style.display = "none";
}
}

$(document).on('keypress', function(e) {
if(e.which == 13) {
  showResponse();
}
})

$( "#ans" ).focus();
