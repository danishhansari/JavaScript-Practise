let btn = document.querySelector('#btn');
let container = document.querySelector('#container');


btn.addEventListener('click', () =>{
    showNotification();
});



function showNotification(){
    const message = document.createElement('div');
    message.classList.add('toast');
    message.innerText = "How are you"
    container.appendChild(message);


    setTimeout(() => {
        message.remove();
    },3000)
}

