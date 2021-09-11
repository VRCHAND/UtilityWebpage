const counter = document.querySelector('#counter');
const start = document.querySelector('#start');
const starts = document.querySelector('#starts');
const stops = document.querySelector('#stop');
const timer = document.querySelector('#timer');
let countdown;
start.addEventListener('click', () => {
    countdown = setInterval(() => {
        console.log(counter.value)
        counter.value ++;
    }, 1000)
})
stops.addEventListener('click', () => {
    clearInterval(countdown)
})
starts.addEventListener('click', () => {
    let time = setInterval(() => {
        timer.value--;
        if (timer.value <= 0){
            clearInterval(time);
        }
    }, 1000)
})
