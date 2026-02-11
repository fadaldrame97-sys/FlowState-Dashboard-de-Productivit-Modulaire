
function TimerGlobale(){

const ButtonStart = document.querySelector('#start');
const Timer = document.querySelector('#timer');

 let temps=25*60;
 let conteur;

 function TimeMisAjours(){

const mnts=Math.floor(temps/60);
const sconds= temps%60;

Timer.textContent=`${mnts.toString().padStart(2,'0')}:${sconds.toString().padStart(2,'0')}`;
temps--;

  if(temps <= 0){

 clearInterval(conteur);


    Timer.textContent="25:00";
    temps= 25*60; 
  }

}



ButtonStart.addEventListener('click',()=>{
    clearInterval(conteur);
    conteur=setInterval(TimeMisAjours,1000)
  
});

}