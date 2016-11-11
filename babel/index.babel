const main = document.querySelector(".main");
const pm = document.querySelector(".pm");
const day = document.querySelector(".day");
const calc_btn = document.querySelector(".calc_btn");
const time_btn = document.querySelector(".time_btn");

let time_mode = true;
//the amount of left shift depending on day of week.
let day_shift = {0:"2px",1:"16px",2:"31px",3:"45px",4:"61px",5:"74px",6:"87px"};

let date = new Date();
day.style.left = day_shift[date.getDay()];

function displayTime(){
  date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  
  if(seconds < 10) { seconds = "0" + seconds }
  if(minutes < 10) { minutes = "0" + minutes }
  if(hours < 10)   {   hours = "0" + hours   }
  
  if(hours >= 13) {
    pm.innerHTML = "PM";
    hours = hours - 12;
  }
  
  main.innerHTML = hours + ":" + minutes + "`" + seconds;
}

let displayInterval = setInterval(displayTime,1000);
displayTime();

calc_btn.addEventListener("click", () => {
  clearInterval(displayInterval);
  main.innerHTML = 0;
  pm.innerHTML = "";
  time_mode = false;
  equation = [];
})

time_btn.addEventListener("click", () => {
  clearInterval(displayInterval);
  displayTime();
  displayInterval = setInterval(displayTime,1000);
  time_mode = true;
})

let equation = [];

function input(x){
  if(time_mode === false){
    equation.push(x);
    console.log(equation);
    main.innerHTML = equation.join('');
  }
}

function solve(){
  try{
    eval(equation.join(''));
  } catch(e) {
    if(e instanceof SyntaxError){
      main.innerHTML = "NaN";
    }
  }
  main.innerHTML = eval(equation.join(''));
  equation = [eval(equation.join(''))];
}