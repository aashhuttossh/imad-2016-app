console.log('Loaded!');
var cnter=0;
var button=document.getElementById("but1");
    var pos;
    
    function pressed(){
       counter=counter+1;
        document.getElementById("wrt").innerHTML = counter;
       /* var img=document.getElementById("img");
        img.style.width=750;*/
    }
    
    var counter=0;
var request=new XMLHttpRequest();
/*button.onclick=function () {

};*/

request.open('GET','http://aashhuttossh.imad.hasura-app.io/counter',true);
request.send(null);








    
