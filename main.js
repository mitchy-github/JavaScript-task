  const timer = document.querySelector(".timer");
  const start = document.querySelector(".start");
  const stop = document.querySelector(".stop");
  const reset = document.querySelector(".reset");

  var startTime;
  var elapsedTime = 0;
  var timerId;
  var timeToadd = 0;

function updateTimeText(){
  var h = Math.floor(elapsedTime / 60000 / 60);
  var m = Math.floor(elapsedTime / 60000);
  var s = Math.floor(elapsedTime % 60000 / 1000);
  var ms = elapsedTime % 1000;

      h = ("" + h).slice(-2);
      m = ("" + m).slice(-2); 
      s = ("" + s).slice(-2);
      ms = ("" + ms).slice(-1);
      
      timer.textContent = h + ":" + m + ":" + s + ":" + ms;
      
}

function countUp(){
  timerId = setTimeout(function(){
  elapsedTime = Date.now() - startTime + timeToadd;
  updateTimeText()
  countUp();
  
  },10);
}

function startTimer() {
  startTime = Date.now();
  countUp();
  
  start.setAttribute("disabled", true);
  stop.removeAttribute("disabled");
  reset.removeAttribute("disabled");
  
}

function stopTimer() {
  clearInterval(timerId);
  timeToadd += Date.now() - startTime;
  
  stop.setAttribute("disabled", true);
  start.removeAttribute("disabled");
  
}

function resetTimer() {
  clearInterval(timerId);
  timeToadd = 0;
  elapsedTime = 0;
  updateTimeText();
  
  start.removeAttribute("disabled");
  stop.setAttribute("disabled", true);
  reset.setAttribute("disabled", true);
  
}

