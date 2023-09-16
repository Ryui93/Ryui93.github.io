let seconds = 0; 
let minutes = 0; 
let hours =   0;

let displaySeconds =0; 
let displayMinutes=0; 
let displayHours=0;

let interval = null;

function stopTimer(){
 clearInterval(interval);
}

function startTimer(){
 interval=setInterval(function(){

     seconds++;

     if(seconds /60 ===1){
         seconds=0;
         minutes++;
        
        if(minutes/60===1){
            minutes=0; hours++;
        }
     }

     //seconds/minutes/hours are single digit then add a leading zero to the value
     if(seconds<10){displaySeconds ="0"+seconds.toString();}
     else{displaySeconds=seconds;}

      if(minutes<10){displayMinutes ="0"+minutes.toString();}
      else{displayMinutes=minutes;}

       if(hours<10){displayHours ="0"+hours.toString();}
       else{displayHours=hours;}

       document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;

 },1000);
}

function resetTimer(){
   window.clearInterval(interval);
   seconds = "00";
   minutes = "00";
   hours = "00";
   document.getElementById("display").innerHTML ="00" + ":" +"00" +":"+"00";

}
document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
