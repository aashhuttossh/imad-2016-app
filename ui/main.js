console.log('Loaded!');
var cnter=0;
var button=document.getElementById("but1");
    /*var pos;
    function mov1(){
        var img=document.getElementById("img");
        img.style.width=750;
    }
    */
var request=new XMLHttpRequest();
request.onreadystatechange = function (){

    if(request.readyState===XMLHttpRequest.DONE)
        if(request.status===200)
          {  var cnter=request.responseText;
               document.getElementById("i1").innerHTML=cnter;
          }


    
    
}





    
}