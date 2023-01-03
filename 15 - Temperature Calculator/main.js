let celcius = document.querySelector('.celcius input')
let farenhit = document.querySelector('.farenhit input')
let kelvin = document.querySelector('.kelvin input') 

celcius.addEventListener('input', () => {
    let cTemp = parseFloat(celcius.value);
    let fTemp = (cTemp * 9/5) + 32;
    let kTemp = cTemp + 273.15;
    farenhit.value = numberRound(fTemp);
    kelvin.value = numberRound(kTemp);
});

farenhit.addEventListener('input', () => {
    let fTemp = parseFloat(farenhit.value);
    let cTemp = (fTemp - 32) * 5/9;
    let kTemp = (fTemp - 32)*5/9+273.15;
    kelvin.value = numberRound(kTemp);
    celcius.value = numberRound(cTemp);
})

kelvin.addEventListener('input', () => {
    let kTemp = parseFloat(kelvin.value);
    let cTemp = kTemp - 273.15;
    let fTemp = (kTemp - 273.15)*9/5+32;
    farenhit.value = numberRound(fTemp);
    celcius.value = numberRound(cTemp);
})


function numberRound(num){
    return Math.round(num*100)/100;
}