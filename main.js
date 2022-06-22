/*global $*/
(function(){
  'use strict';

  var timer = document.getElementById('timer');
  var start = document.getElementById('start');
  var stop = document.getElementById('stop');
  var reset = document.getElementById('reset');

  var startTime;
  var elapsedTime = 0;
  var timerId;
  var timeToadd = 0;

function updateTimetText(){
  var h = Math.floor(elapsedTime / 60000 / 60);
  var m = Math.floor(elapsedTime / 60000);
  var s = Math.floor(elapsedTime % 60000 / 1000);
  var ms = elapsedTime % 1000;

      h = ('' + h).slice(-2);
      m = ('' + m).slice(-2); 
      s = ('' + s).slice(-2);
      ms = ('' + ms).slice(-1);
      
      timer.textContent = h + ':' + m + ':' + s + ':' + ms;
      
    }

function countUp(){
      timerId = setTimeout(function(){
      elapsedTime = Date.now() - startTime + timeToadd;
      updateTimetText()
      countUp();
      
      },10);
    }

      start.addEventListener('click',function(){
      startTime = Date.now();
      countUp();
      
  　　  start.setAttribute("disabled", true);
    　stop.removeAttribute("disabled");
  　　　reset.removeAttribute("disabled");
  　  　
    });

    stop.addEventListener('click',function(){
    clearTimeout(timerId);
    timeToadd += Date.now() - startTime;
    
    stop.setAttribute("disabled", true);
    start.removeAttribute("disabled");
    
    });

    reset.addEventListener('click',function(){
    elapsedTime = 0;
    timeToadd = 0;
    updateTimetText();
    
    start.removeAttribute("disabled");
    stop.setAttribute("disabled", true);
    reset.setAttribute("disabled", true);
    
    });
})();