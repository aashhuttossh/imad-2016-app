console.log('Loaded!');

    /*var pos;
    function mov1(){
        var img=document.getElementById("img");
        img.style.width=750;
    }
    */
var request=new XMLHttpRequest():
var button=document.getElementById("but1");
var cnter=0;

button.onclick =function () {
    cnter=cnter+1;
    document.getElementById("i1").innerHTML=cnter.toString();
};