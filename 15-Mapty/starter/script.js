'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
let map,mapEvent;

// to check navigator permission
if (navigator.geolocation) { 
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const {latitude} = position.coords;
      const {longitude} = position.coords;
      //console.log(`https://www.google.com/maps/@${latitude},${longitude},`)
      const coords = [latitude,longitude]
      map = L.map('map').setView(coords, 13);
      //console.dir(map)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      
     
      map.on('click',function(mapE){
        mapEvent = mapE; 
        form.classList.remove('hidden');
        inputDistance.focus()
        
      })
      
    },
    function () {
      alert('Couldnt oget the location');
    }
  );
}

form.addEventListener('submit', function(e){
    e.preventDefault() // prenevent reload page

    // clear inputs
    inputCadence.value = inputDistance.value = inputDuration.value = inputElevation ="";

    // display marker
    const {lat,lng} = mapEvent.latlng
          //console.log(lat,lng)
          L.marker([lat,lng]).addTo(map)
        .bindPopup(L.popup({
            maxWidth:250,
            minWidth:100,
            closeOnClick:false,
            autoClose:false,
            className:'running-popup'
        }
        ))
        .openPopup().setPopupContent('workout');
})

inputType.addEventListener('change', function(){
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden')
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden')
})
