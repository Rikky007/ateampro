// JavaScript Document

var pom = 0;
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}  



function move() {
  var elem = document.getElementById("myBar");   
  var width = 10;
  
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      pom = 1;
      document.getElementById("donate").innerHTML = '<img height="60px" src="images/Buy-Now.png"></a>';
    } else {
      width++; 
      elem.style.width = width + '%'; 
      document.getElementById("label").innerHTML = width * 1  + '%';
      
    }
  }
} 
  