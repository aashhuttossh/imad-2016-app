    
    
 
// alert("I am in java Scrip");
    
 var cnt=0;
    
    //var counter=document.getElementById("Count");
    function msg1(){
    cnt=cnt+1;
    
   document.getElementById("val").innerHTML = cnt ;
    }
    
    
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
// Create gradient
var grd = ctx.createLinearGradient(0,0,1350,0);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");
// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,1350,80);
    
   