console.log('Loaded!');

    /*var pos;
    function mov1(){
        var img=document.getElementById("img");
        img.style.width=750;
    }
    */
var request=new XMLHttpRequest();
request.onreadystatechange = function (){

    
}


var button=document.getElementById("but1");
var cnter=0;

function pressed () {
    cnter=cnter+1;
    document.getElementById("i1").innerHTML=cnter;
}