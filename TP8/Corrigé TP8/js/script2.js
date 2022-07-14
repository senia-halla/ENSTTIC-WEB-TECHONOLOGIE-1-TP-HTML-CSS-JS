function testAverage(){
  var avg = window.prompt("donner la moyenne : ");
  if(avg >= 10)
    window.alert(avg+" --> admis");
  else if(avg >= 5)
    window.alert(avg+" --> ajourné");
  else if(avg != null)
    window.alert(avg+" --> exclu");
}
const bt = document.getElementsByTagName('button')[0];
bt.addEventListener('click',testAverage);
