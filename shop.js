var shirts= document.getElementById("shirts");
var shirt=shirts.childNodes;
var opacity=1;
var id = setInterval(fadein, 200);
function fadein(x){
    if(opacity==0){
opacity+=0.1;
document.getElementById("demo").innerHTML = opacity;
shirt[x].style.opacity=opacity;
    }
}
$(function){
$("#weerdos").click(function(){
$("#subweerd").slideToggle(500);
});
});

   
