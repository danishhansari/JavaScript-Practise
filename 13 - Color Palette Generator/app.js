for(let i = 0;i<50;i++){
    const box = document.createElement('div');
    box.classList.add('box');
    const container = document.querySelector('.container');
    container.appendChild(box);
}
let change = document.querySelectorAll('.box');
const btn = document.getElementById('btn');
addColor();
btn.addEventListener('click',addColor);
function generateColor(){
    let color = '';
    let character = '1234567890abcdef';
    let length = 6;
    for(let i =0;i<length;i++){
        let randomNumber = Math.floor(Math.random()*character.length);
        color += character.substring(randomNumber,randomNumber+1); 
    }
    return '#' +color;
}
function addColor(){
    change.forEach(element => {
    let newColor = generateColor();
    element.style.background = newColor;
    element.innerHTML = `<p class="hex-code">${newColor}</p>`;    
    });
}
