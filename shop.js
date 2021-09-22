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
var n = 1;
var gunL = $('#gun1');
var gunR = $('#gun2');
var $slide = $('#slide .photos');
var $margin;
var $value;
var slideSpeed=10;
var time = 1000;
var interval;
$(function(){
$("#weerdos").on('click', function(){
    $("#subweerd").slideToggle(500);
    /*
if(n==1){
    $('#weerdos').css("height", "245%");
    console.log('n = ',n);
    n*=-1;
}
else
{
    $('#weerdos').css("height", "");
    console.log('n = ',n);
    n*=-1;
}*/
});
});
$(function(){
    $("#slide").on('click', function(){
        $("#backdrop").slideToggle(500);
        console.log('hi');
    });
});
start(slideSpeed);
    function start(x){
    interval = setInterval(function(){
        $margin = $slide.css('margin-left');
        $value = parseInt($margin);
        $slide.animate({'margin-left': '-='+x},time, function(){
            console.log(x);
            if($value < -1530)
            {
                $slide.css('margin-left', '0px');
            }
        });
    }, 1);
}
function stop(){
    clearInterval(interval);
    console.log('hi');
}
    /*$('#gun1').on('click',function(){
        $slide.css('margin-left', '-=300px');
        console.log('eyo');
    });
    $('#gun1').mouseup(function(){
        stop();
    });
    $('#gun2').mousedown(function(){
        x=70;
        start(x);
        console.log('ey');
    });
    $('#gun2').mouseup(function(){
        x=0;
        console.log('hello');
        start(x);
    });
});*/
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
                zoomWindowPosition:2,lensSize:200
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
            zoomWindowPosition:2,lensSize:200
    });
}
 });

   
