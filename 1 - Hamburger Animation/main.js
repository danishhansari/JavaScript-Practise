let btn = document.querySelector('#btn');
let nav = document.querySelector('#nav');



btn.addEventListener("click", () => {
    btn.classList.toggle('active')
    nav.classList.toggle('active')
})
