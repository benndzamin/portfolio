let countdown;
const display = document.querySelector('.display__time-left');
const buttons = document.querySelectorAll('.timer__button');
const endTime = document.querySelector('.display__end-time');
const input   = document.querySelector('[name="minutes"]')

function timer(seconds){
    //clear any existing timers
    clearInterval(countdown);
    const  now = Date.now();
    const then = now + (seconds * 1000);
    displayTimeLeft(seconds)
    displayEndTime(then)
    

    countdown = setInterval(()=> {
        const secondsLeft = Math.round((then - Date.now())/1000);
        //stop it
        if(secondsLeft <= 0){
            clearInterval(countdown);
            return;
        }

        //display it
        displayTimeLeft(secondsLeft)
    }, 1000)
    };


function displayTimeLeft(seconds){
    let hours   = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds - (hours * 3600)) / 60);
    let secs   = seconds % 60;

    if(secs < 10)   {secs = "0" + secs}
    if(minutes < 10){minutes = "0" + minutes}
    
    display.textContent = `${hours}:${minutes}:${secs}`;
    document.title = display.textContent;
}


function setTime(){
    timer(this.dataset.time)
}

function displayEndTime(stamp){
    const end = new Date(stamp);
    const hour = end.getHours();
    const mins = end.getMinutes();
    endTime.textContent = `Be back at ${hour}:${mins < 10 ? '0':''}${mins}`
}

buttons.forEach(button => button.addEventListener('click', setTime));

document.customForm.addEventListener('submit', function(e){
    e.preventDefault();
    const mins = this.minutes.value*60;
    timer(mins);
    this.reset();
})