let imgDiv = document.getElementById('img-container')
let img = document.querySelectorAll('#img-container img');

let index = 0;

function run(){
    index++;
    if(index>img.length - 1){
        index = 0;
    }
    imgDiv.style.transform = `translateX(${-index * 500}px)`;
}

setInterval(run,800)