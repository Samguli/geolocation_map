'use strict';

const months = ['January', 'Februar', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form_input--type');
const inputDistance = document.querySelector('.form_input--distance');
const inputDuration = document.querySelector('.form_input--duration');
const inputCadence = document.querySelector('form_input--cadence');
const inputElevation = document.querySelector('.form_input--elevation');

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
        console.log(position);
        const {latitude} = position.coords;
        const {longitude} = position.coords;
        console.log(`https://www.google.de/maps/@${latitude},${longitude}`);

        const coords = {latitude, longitude}

        const mymap = L.map('mapId').setView(coords, 13);

        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'your.mapbox.access.token'
        }).addTo(mymap);

        L.marker(coords).addTo(mymap);
    }, function () {
        alert('Could not get your position');
    })
}

