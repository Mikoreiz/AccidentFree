window.onload = function(event) {
  // Month Day, Year Hour:Minute:Second, id-of-element-container
  var now = new Date();
  var point = now;
  countDaysPassed(point, 'daysPassed'); // ****** Change this line!
};

function countDaysPassed(countFrom, id) {
  countFrom = new Date(countFrom).getTime();
  var now = new Date(),
      countFrom = new Date(countFrom),
      timeDifference = (now - countFrom);
    
  var secondsInADay = 60 * 60 * 1000 * 24;
  var secondsInAHour = 60 * 60 * 1000;
  
  days = Math.floor(timeDifference / (secondsInADay) * 1);
  secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);

  var daysPassed = document.getElementById(id);
  daysPassed.getElementsByClassName('days')[0].innerText = secs;

  clearTimeout(countDaysPassed.interval);
  countDaysPassed.interval = setTimeout(function(){ countDaysPassed(countFrom, id); }, 1000);
};

