console.log('Loaded!');
var cnter=0;
var button=document.getElementById("but1");
    /*var pos;
    function mov1(){
        var img=document.getElementById("img");
        img.style.width=750;
    }
    */
    var counter=0;
var request=new XMLHttpRequest();
button.onclick=function () {
counter=counter+1;
document.getElementById("wrt").innerHTML = counter;
};

request.open('GET','http://aashhuttossh.imad.hasura-app.io/counter',true);
request.send(null);








    
