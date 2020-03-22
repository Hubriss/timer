
function timer(){
  var retrieve=document.getElementById('main');
  var number=Number(retrieve.innerHTML);
  number++;
  retrieve.innerHTML=number;
}
setInterval(timer, 1000);
