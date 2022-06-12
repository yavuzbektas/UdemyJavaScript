'use strict';

// prettier-ignore


const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
const btnsEdit = document.getElementsByClassName('btn__edit')
const btnsDelete = document.getElementsByClassName('btn__delete')
class Workout {
  date = new Date();
  ID = (Date.now() + '').slice(-10);
  constructor(coords, distance, duration) {
    this.coords = coords; // {[lat,lng]}
    this.distance = distance; // in km
    this.duration = duration; // in min
  }
  _setDescription(){
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDay()}`
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }
  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
  
}

class Cycling extends Workout {
  type = 'cycling'
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calSpeed();
    this._setDescription();
  }
  calSpeed() {
    //--- km/h
    this.speed = this.distance / (this.duration / 60); // in km
    return this.speed;
  }
}
// const app1 = new Running([125,45],23,4,223)
// const app2 = new Cycling([125,45],45,44,111)
// console.log(app1,app2)

class App {
  #map;
  #mapZoomLevel=13;
  #mapEvent;
  #workouts = [];
  #currentWorkout;
  constructor() {
    
    // get surrent position 
    this._getPosition();
    // get lccal data
    this._getLocalStorage();

    // handle events
    form.addEventListener('submit', this._formSubmit.bind(this));
    //form.addEventListener('submit', this._newWorkOut.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener('click',this._moveToPosition.bind(this))
    for (let index = 0; index < btnsEdit.length; index++) {
      btnsEdit[index].addEventListener('click',this._showEditForm.bind(this));
      
    }
    for (let index = 0; index < btnsDelete.length; index++) {
      btnsDelete[index].addEventListener('click',this._deleteWorkout.bind(this));
      
    }
    
  }
  _formSubmit(e){
    e.preventDefault(); // prenevent reload page
    if (form.classList.contains("new")) this._newWorkOut()
    if (form.classList.contains("edit")) this._editWorkout()
  }
  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Couldnt oget the location');
        }
      );
    }
  }
  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    //console.log(`https://www.google.com/maps/@${latitude},${longitude},`)
    const coords = [latitude, longitude];
    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);
    //console.dir(map)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on('click', this._showForm.bind(this));
    this.#workouts.forEach(work =>{
      this._renderWorkoutMarker(work);
    })
  }
  _showForm(mapE) {
    this.#mapEvent = mapE.latlng;
    console.log(this.#mapEvent)
    form.classList.remove('hidden');
    form.classList.remove("edit")
    form.classList.add("new")
    inputDistance.focus();
  }
  _showEditForm(e){
    form.classList.remove('hidden');
    inputDistance.focus();
    form.classList.remove("new")
    form.classList.add("edit")
    this.#currentWorkout = e.target.closest('.workout')
    const workoutSelected = this.#workouts.find(work => work.ID=== this.#currentWorkout.dataset.id)
    
    inputType.value = workoutSelected.type
    inputDistance.value = workoutSelected.distance
    inputDuration.value = workoutSelected.duration
    inputElevation.value = workoutSelected.elevationGain
    inputCadence.value = workoutSelected.cadence
  }
  _hideForm () {
    inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value =
    '';
    form.style.display='none'
    form.classList.add('hidden');
    setTimeout(()=> form.style.display='grid',1000)
  }
  _toggleElevationField() {
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  }
  _newWorkOut() {
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));
    const allPositive = (...inputs) => inputs.every(inp=> inp > 0)
    //e.preventDefault(); // prenevent reload page
    
    // get data from form
    const type = inputType.value;
    const duration = +inputDuration.value; // + to convert to number
    const distance = +inputDistance.value;
    
    //render workout on map as marker
    const { lat, lng } = this.#mapEvent;
    let workout;
    
    // if workout running  create running object
    if (type == 'running') {
      const cadence = +inputCadence.value;
      
      // check if data is valid
      if (!validInputs(duration, distance, cadence) || !allPositive(duration, distance, cadence) ){
        return alert('Inputs have to be positive number');
      }
      workout = new Running([lat, lng],distance,duration,cadence)
      
    }

    // if workout cycling , create cycling object
    if (type == 'cycling') {
      const elevation = +inputElevation.value;
     
      // check if data is valid
      if (!validInputs(duration, distance, elevation)|| !allPositive(duration, distance)) {
        return alert('Inputs have to be positive number');
      }
      workout = new Cycling([lat, lng],distance,duration,elevation)
      
    }
    
    // add new object to workout array
    this.#workouts.push(workout)
    //console.log(lat,lng)

    // render workout as a marker 
    this._renderWorkoutMarker(workout);
    // rendern workout on list
    this._renderWorkout(workout);
    // hide form and  clear inputs
    this._hideForm();
    // save the workout to localstorage
    this._setLocalStorage(); 

    // display marker
  }
  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          closeOnClick: false,
          autoClose: false,
          className: `${workout.type}-popup`,
        })
      )
      .openPopup()
      .setPopupContent(`${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️' } ${workout.description}`);
    }
  _renderWorkout(workout){
    
    let html = ` 
    <li class="workout workout--${workout.type}" data-id="${workout.ID}">
        <h2 class="workout__title">${workout.description}</h2>
        <div class="btns_icon"> 
        <span class="workout__button btn__edit">✍</span> 
        <span class="workout__button btn__delete">⛔</span>
        </div>
        
        <div class="workout__details">
          <span class="workout__icon">${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️' }</span>
          <span class="workout__value">${workout.distance}</span>
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${workout.duration}</span>
          <span class="workout__unit">min</span>
        </div>
    `
    if (workout.type==="running")
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.pace.toFixed(1)}</span>
          <span class="workout__unit">min/km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">🦶🏼</span>
          <span class="workout__value">${workout.cadence}</span>
          <span class="workout__unit">spm</span>
        </div>
      </li>
      `;
    
    if (workout.type==="cycling") 
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.speed.toFixed(1)}</span>
          <span class="workout__unit">km/h</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⛰</span>
          <span class="workout__value">${workout.elevationGain}</span>
          <span class="workout__unit">m</span>
        </div>
      </li>
      `;
    
    form.insertAdjacentHTML('afterend',html);
    const btn = document.querySelector(`[data-id~="${workout.ID}"]`)
    btn.addEventListener('click',this._deleteWorkout.bind(this))
  }
  _moveToPosition(e){
    const workoutEl = e.target.closest('.workout')
    
    if (!workoutEl){
      return 
    }
    
    const workoutSelected = this.#workouts.find(work => work.ID=== workoutEl.dataset.id)

    this.#map.setView(workoutSelected.coords,this.#mapZoomLevel,{
      animate:true,
      pan:{
        duration:1
      }
    })
  }
  _setLocalStorage(){
    localStorage.setItem("workouts",JSON.stringify(this.#workouts))
  }
  _getLocalStorage(){
    const data = JSON.parse(localStorage.getItem("workouts"))
    if (!data) return;
    this.#workouts = data
    
    this.#workouts.forEach(work =>{
      
      this._renderWorkout(work);
    })
    
    
  }
  _editWorkout(){
    
    const workoutSelected = this.#workouts.find(work => work.ID=== this.#currentWorkout.dataset.id)
    
    const validInputs = (...inputs) =>
    inputs.every(inp => Number.isFinite(inp));
    const allPositive = (...inputs) => inputs.every(inp=> inp > 0)
    //e.preventDefault(); // prenevent reload page
    
    // get data from form
    const type = inputType.value;
    const duration = +inputDuration.value; // + to convert to number
    const distance = +inputDistance.value;
    
    //render workout on map as marker
    const { lat, lng } = {lat:workoutSelected.coords[0],lng:workoutSelected.coords[1]};
    
    
    // if workout running  create running object
    if (type == 'running') {
      const cadence = +inputCadence.value;
      
      // check if data is valid
      if (!validInputs(duration, distance, cadence) || !allPositive(duration, distance, cadence) ){
        return alert('Inputs have to be positive number');
      }
      
      
    }

    // if workout cycling , create cycling object
    if (type == 'cycling') {
      const elevation = +inputElevation.value;
    
      // check if data is valid
      if (!validInputs(duration, distance, elevation)|| !allPositive(duration, distance)) {
        return alert('Inputs have to be positive number');
      }
      
      
    }
    //this.#workouts[this.#workouts.findIndex(work => work.ID=== this.#currentWorkout.dataset.id)] = this.#currentWorkout
    this._hideForm();
    // save the workout to localstorage
    this._setLocalStorage(); 
    

  }
  _deleteWorkout(e){
    console.log("delete is working")
    console.log(this.#workouts)
    this.#currentWorkout = e.target.closest('.workout')
    const index = this.#workouts.findIndex(work => work.ID=== this.#currentWorkout.dataset.id)
    this.#workouts.splice(index,1)
    console.log("silinecek ID",index)
    console.log(this.#workouts)
    // get surrent position 
    this._setLocalStorage()
    location.reload()
  }
}
const app = new App();
