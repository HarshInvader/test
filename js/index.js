"use strict";

var main = document.querySelector(".main");
var pm = document.querySelector(".pm");
var day = document.querySelector(".day");
var calc_btn = document.querySelector(".calc_btn");
var time_btn = document.querySelector(".time_btn");

var time_mode = true;
//the amount of left shift depending on day of week.
var day_shift = { 0: "2px", 1: "16px", 2: "31px", 3: "45px", 4: "61px", 5: "74px", 6: "87px" };

var date = new Date();
day.style.left = day_shift[date.getDay()];

function displayTime() {
  date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }

  if (hours >= 13) {
    pm.innerHTML = "PM";
    hours = hours - 12;
  }

  main.innerHTML = hours + ":" + minutes + "`" + seconds;
}

var displayInterval = setInterval(displayTime, 1000);
displayTime();

calc_btn.addEventListener("click", function () {
  clearInterval(displayInterval);
  main.innerHTML = 0;
  pm.innerHTML = "";
  time_mode = false;
  equation = [];
});

time_btn.addEventListener("click", function () {
  clearInterval(displayInterval);
  displayTime();
  displayInterval = setInterval(displayTime, 1000);
  time_mode = true;
});

var equation = [];

function input(x) {
  if (time_mode === false) {
    equation.push(x);
    console.log(equation);
    main.innerHTML = equation.join('');
  }
}

function solve() {
  try {
    eval(equation.join(''));
  } catch (e) {
    if (e instanceof SyntaxError) {
      main.innerHTML = "NaN";
    }
  }
  main.innerHTML = eval(equation.join(''));
  equation = [eval(equation.join(''))];
}