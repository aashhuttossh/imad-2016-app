    
    
 
// alert("I am in java Scrip");
    
 var cnt=0;
     
    //var counter=document.getElementById("Count");
    function msg1(){
    cnt=cnt+1;
    
   document.getElementById("val").innerHTML = cnt ;
   var htm=`<marquee scrollamount=${cnt}> Speed Increased </marquee>`;
  
  document.getElementById("inp").innerHTML=htm;
    }

 
    function msg2(){
    cnt=cnt-1;
    
   document.getElementById("val").innerHTML = cnt ;
    var htm=`<marquee scrollamount=${cnt}> Speed Decreased </marquee>`;
 
  document.getElementById("inp").innerHTML=htm;
    }
