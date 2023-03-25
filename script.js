const map = document.getElementById('map');
const LocationBtn = document.getElementById('LocationBtn');
const removeLocationBtn = document.getElementById('removeLocationBtn');

function getLocation(){
    if(localStorage.getItem("lat")){
        LocationBtn.disabled=true;
    }
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
        LocationBtn.disabled=true;
    }else{
        map.innerText="Sorry, Geolocation is not supported by your browser";
    }
}

function showPosition(position){
    localStorage.setItem("lat",position.coords.latitude);
    localStorage.setItem("long",position.coords.longitude);
    map.innerHTML=`<iframe src="https://maps.google.com/maps?q=${position.coords.latitude}, ${position.coords.longitude}&output=embed"></iframe>`;
}

function removeLocation(){
    LocationBtn.disabled=false;
    localStorage.removeItem("lat")
    localStorage.removeItem("long")
}
