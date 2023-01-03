let newYears = '1 Jan 2024';


let Day = document.querySelector('#days .big-text')
let Hour = document.querySelector('#hour .big-text')
let Minute = document.querySelector('#minute .big-text')
let Second = document.querySelector('#second .big-text')

function countDown() {
    let newYearDate = new Date(newYears);
    let currentYearDate = new Date();

    const totalSecond = (newYearDate - currentYearDate) / 1000;


    const days = Math.floor(totalSecond / 3600 / 24);
    const hours = Math.floor(totalSecond / 3600 % 24);
    const minute = Math.floor(totalSecond / 60) % 60;
    const second = Math.floor(totalSecond) % 60;

    if (minute < 10) {
        Minute.innerHTML = `0${minute}`
    } else {
        Minute.innerHTML = minute;
    }

    Day.innerHTML = days;
    Hour.innerHTML = hours;
    Second.innerHTML = second;

}
setInterval(countDown, 1000)
