    
    
 
// alert("I am in java Scrip");
    
 var cnt=0;
     var htm=`<marquee scrollamount=${cnt}> hello </marquee>`;
    //var counter=document.getElementById("Count");
    function msg1(){
    cnt=cnt+1;
    
   document.getElementById("val").innerHTML = cnt ;
   
  
  document.getElementById("inp").innerHTML=htm;
    }

 
    function msg2(){
    cnt=cnt-1;
    
   //document.getElementById("val").innerHTML = cnt ;
    var htm=`<marquee scrollamount=${cnt}> hello </marquee>`;
  
  document.getElementById("inp").innerHTML=htm;
    }
