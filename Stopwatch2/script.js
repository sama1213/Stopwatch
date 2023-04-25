let hr=0;
let min=0;
let sec=0;
let msec=0;

let timer=false;

function start(){
    timer=true;
    stopwatch();

}
function stop(){
    timer=false;
}
function reset(){
    timer=false;
    let hr=0;
    let min=0;
    let sec=0;
    let msec=0;
    document.getElementById("h").innerHTML="00";
    document.getElementById("m").innerHTML="00";
    document.getElementById("s").innerHTML="00";
    document.getElementById("ms").innerHTML="00";
}
function stopwatch(){
    if(timer == true){
        msec=msec+1;

        if(msec==100){
            sec=sec+1;
            msec=0;
        }
        if(sec==60){
            min=min+1;
            sec=0;
        }
        if(min==60){
            hr=hr+1;
            min=0;
        }

        let hrstring=hr;
        let minstring=min;
        let secstring=sec;
        let msecstring=msec;
        if(hr<10){
            hrstring="0"+hrstring;
        }
        if(min<10){
            minstring="0"+minstring;
        }
        if(sec<10){
            secstring="0"+secstring;
        }
        if(msec<10){
            msecstring="0"+msecstring;
        }


        document.getElementById("h").innerHTML=hrstring;
        document.getElementById("m").innerHTML=minstring;
        document.getElementById("s").innerHTML=secstring;
        document.getElementById("ms").innerHTML=msecstring;
        setTimeout("stopwatch()",10);
    }
}