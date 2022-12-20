//box breath
document.addEventListener("DOMContentLoaded", function(event) { 

    
let ball = document.getElementById('floating-ball');
let button = document.getElementById('ball-range-button');
let instText = document.getElementById('arena_floating_ball_text');


let roundsTimer = 5;
let secondsTimer = 1;

let roundsFloat = 4;
let secondsFloat = 20;


function setTimer(rounds, seconds){
    let progressTimer = null;
    let timeleft = 1;
    document.getElementById("progressBar").value = timeleft;
    progressTimer = setInterval(function(){
        timeleft += 1;
        document.getElementById("progressBar").value = timeleft;
        if(timeleft >= rounds){
            clearInterval(progressTimer);
        }
      }, seconds * 1000);
}

function repeatFloat(rounds, seconds){

    let repeatTimer = null;
    let repeats = 0;
    float();
    repeatTimer = setInterval(function(){
        repeats += 1;
        float();
        if(repeats >= rounds){
            clearInterval(repeatTimer);
        }
      }, seconds * 1000);
}


function up () {
    ball.style.bottom = '100%';
    ball.style.transform = 'scale(1.5) translateX(-25%) translateY(25%)';
    instText.innerHTML = '<p>nádech</p>';
  
    setTimer(roundsTimer, secondsTimer)
};

function right () {
    ball.style.bottom = '100%';
    ball.style.left = '100%';
    instText.innerHTML = '<p>zadrž dech</p>';
    
    setTimer(roundsTimer, secondsTimer)
};

function down () {
    ball.style.bottom = '0%';
    ball.style.left = '100%';
    ball.style.transform = 'scale(1) translateX(-50%) translateY(50%)';
    instText.innerHTML = '<p>výdech</p>';
    
    setTimer(roundsTimer, secondsTimer)
};

function left () {
    ball.style.bottom = '0%';
    ball.style.left = '0%'; 
    instText.innerHTML = '<p>zadrž dech</p>';
    
    setTimer(roundsTimer, secondsTimer)
};

function float () {

    up ();
    setTimeout(right, 5000);
    setTimeout(down, 10000);
    setTimeout(left, 15000);
    
};


function doFloat(){
    repeatFloat(roundsFloat,secondsFloat);
};

if(button){
    button.onclick = doFloat;
};


 // });




  // circle breath
//document.addEventListener("DOMContentLoaded", function(event) { 

    let ballCircle = document.getElementById('floating-ball-circle');
    let buttonCircle = document.getElementById('ball-range-button-circle');

    let roundsCircle = 4;
    let secondsCircle = 20;
    
    
    function inhale () {
        ballCircle.style.transform = 'scale(2)';
        ballCircle.innerHTML = '<p>nádech</p>';
        setTimer(roundsTimer, secondsTimer)
    };
    
    
    function hold () {
        ballCircle.innerHTML = '<p>zadrž dech</p>';
        setTimer(roundsTimer, secondsTimer)
    }
    
    function exhale () {
        ballCircle.style.transform = 'scale(1)';
        ballCircle.innerHTML = '<p>výdech</p>';
        setTimer(roundsTimer, secondsTimer)
    }
    
    function circle () {
        inhale();
        setTimeout(hold, 5000);
        setTimeout(exhale, 10000);
        setTimeout(hold, 15000);
        // setTimeout(ballCircle.innerHTML = '', 20000);
    
    }

    function repeatCircle(rounds, seconds){

        let repeatTimer = null;
        let repeats = 0;
        circle();
        repeatTimer = setInterval(function(){
            repeats += 1;
            circle();
            if(repeats >= rounds){
                clearInterval(repeatTimer);
            }
          }, seconds * 1000);
    }
    
    function doRepeatCircle(){
        repeatCircle(roundsCircle,secondsCircle);
    };

    if(buttonCircle){
        buttonCircle.onclick = doRepeatCircle;
    }
    
 
    });
