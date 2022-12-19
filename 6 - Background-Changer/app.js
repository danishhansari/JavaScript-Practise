const btn = document.querySelector('.btn');

btn.addEventListener('click',() => {
    document.body.style.background = changeBg();
});

function changeBg(){
    return `hsl(${Math.floor(Math.random()*360)},100%,50%)`;
}
