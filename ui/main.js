console.log('Loaded!');
var cnter=0;
var button=document.getElementById("but1");
var pos;
var sql;

    
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



function myFunction() {
     sql=document.getElementById("demo");
}


var interval = {};
function initMovement(car, speed) 
{
    var carObj = document.getElementById(car);
    var left = 0;
    interval[car] = setInterval(function()
    {
        left += speed/100;
        carObj.style.left = left+"px";
        
        if(left >= 300) //finish
        {
            for(var i in interval) 
            {
                clearInterval(interval[i]);
            }
            document.getElementById("start").disabled = false;
            document.getElementById("stop").disabled = true;
        }
    },10);
}
function start() 
{
    var speed1 = document.getElementById("speed1").value;
    var speed2 = document.getElementById("speed2").value;
    initMovement("car1", speed1);
    initMovement("car2", speed2);
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
}
function stop() 
{
    for(var i in interval) 
    {
        clearInterval(interval[i]);
    }
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
}




    
