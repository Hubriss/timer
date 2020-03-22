var timeIntervalUp;
function startTimer(){
  timeIntervalUp = setInterval(function(){timer()}, 1000);
}
function timer(){
  var retrieve=document.getElementById('main');
  var number=Number(retrieve.innerHTML);
  var addition = 1.00;
  var result = number + addition;
  var resultDec = result.toFixed(2);
  retrieve.innerHTML=resultDec;
}
