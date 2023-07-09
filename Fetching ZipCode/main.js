const form = document.querySelector('form');
document.querySelector('body').addEventListener('click', deleteLocation)
form.addEventListener('submit', getLocationInfo);
function getLocationInfo (e) {
    e.preventDefault()
    let zip = document.querySelector('input').value;
    // Make request 
    fetch(`https://api.zippopotam.us/IN/${zip}`)
    .then(response => {
        if(response.status != 200){
            showIcon('remove')
            document.querySelector('#output').innerHTML = 
            `
            <article class="text-red-500 bg-red-100 text-center p-4 text-xl">Invalid Zipcode, please try again</article>
            `;
            throw Error (response.statusText)
        } else {
            showIcon('check')
            return response.json();
        }
    }).then(data => {
        // Show Location
        let output  = ''
        data.places.forEach(place => {
            output += `
            <article class="message w-[50%] mx-auto mt-8 border-green-500 border rounded">
            <div class="message-header">
            <div class="flex justify-between bg-green-500 p-4 rounded text-white mb-4 ">
            <p class="font-bold">Location Info</p>
            <button class="text-xs bg-white text-black rounded-md"><i class="fa fa-x delete py-1 px-2"></i></button>
            </div>
            </div>
            <div class="message-body p-4">
            <ul>
            <li><strong class="font-bold">City: </strong>${place['place name']}</li>
            <li><strong class="font-bold">State: </strong>${place['state']}</li>
            <li><strong class="font-bold">Longitude: </strong>${place['longitude']}</li>
            <li><strong class="font-bold">Latitude: </strong>${place['latitude']}</li>
            </ul>
            </div>
            </article>
            `;
        });
        document.querySelector('#output').innerHTML = output;
    }).catch(err => console.log(err))
}
function showIcon (icon) {
    // Clear icons
    document.querySelector('.icon-remove').style.display = 'none'
    document.querySelector('.icon-check').style.display ="none"
    // Show Correct Icon
    document.querySelector(`.icon-${icon}`).style.display ='inline-flex'
}
function deleteLocation (e) {
    // console.log(123)
    if(e.target.classList.contains('delete')){
        document.querySelector('.message').remove();
        document.querySelector('.zip').value = ' '
        document.querySelector('.icon-check').remove()
    }
}


