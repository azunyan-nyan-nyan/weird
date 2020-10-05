/*var shirts= document.getElementById("shirts");
var shirt=shirts.childNodes;
var opacity=1;
var id = setInterval(fadein, 200);
function fadein(x){
    if(opacity==0){
opacity+=0.1;
document.getElementById("demo").innerHTML = opacity;
shirt[x].style.opacity=opacity;
    }
}*/
$(function(){
$("#weerdos").on('click', function(){
$("#subweerd").slideToggle(500);
});
});
$(function () { 
    var width = $(window).width();
    $(window).resize(function () { 
        var width = $(window).width();
        if(width<1001)
        {
            $("#shirt1").elevateZoom({
                zoomType: "lens", cursor: "pointer",lensSize:300, containLensZoom: true
            });
    }
        else if(width>1001)
        {
            $("#shirt1").elevateZoom({
                zoomWindowPosition:2
        });
    }
    });
    if(width<1001)
    {
        $("#shirt1").elevateZoom({
            zoomType: "lens", cursor: "pointer",lensSize:300, containLensZoom: true
        });
}
    else if(width>1001)
    {
        $("#shirt1").elevateZoom({
            zoomWindowPosition:2
    });
}
 });

   
