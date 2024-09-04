$(document).ready(function(){
    var ms = 0;
    var sec  = 0;
    var num = 1;
    var Interval;
    $(".lap").hide();
    
    $("#start").on("click",function(){
        clearInterval(Interval);
        Interval = setInterval(startTime,10);
    });
    
    $("#stop").on("click",function(){
        clearInterval(Interval);
    });

    $("#reset").on("click",function(){
        clearInterval(Interval);
        $("#ms").text("00");
        $("#sec ").text("00");
        $(".lap").hide().html()
        ms = 0;
        sec  = 0;
        num =1;
    });
    $("#laps").on("click",function(){
        let ms = $("#ms").text();
        let sec  = $("#sec ").text();
        console.log(ms);
        if(ms == 0 & sec == 0){
            alert("Empty Lap Can't be added Please Start and use the Lap");
        }else{
        var t = $("<div class ='lap'><div>").html(`${num++})  ${sec }.${ms} Seconds`);
        $("#maincontainer").append(t);
        }
    });

    function startTime(){
        ms ++;
        if(ms <= 9){
        $("#ms").text("0"+ms);
        }
        if(ms > 9){
            $("#ms").text(ms);
        }
        if(ms >99){
            sec ++;
            $("#sec").text("0"+sec);
            ms =0;
            // $("ms").text("0"+0);
        }
        if(sec>9){
            $("#sec").text(sec);
        }

        
    }

});