let input = document.querySelector('input')
let heading = document.querySelector('.heading');
let text = document.querySelector('.text');
input.addEventListener('input', () => {
    heading.style.display = "block";
    let number = input.value;
    fetch(`http://numbersapi.com/${number}`)
    .then(res => res.text())
    .then(data => {
        if(number != ''){
            text.innerText = data
        }
    })
    .catch(err => console.log(err))
})