mapboxgl.accessToken =
  "pk.eyJ1IjoicHJhbmF2LWpoYSIsImEiOiJjbHM2ZnN4bGoxdjV4MmtvNWZvdzM1cjN3In0.lc2HGOt95xjLVtivg9KvfQ";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  console.log(position);
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([-73.5674, 45.5019]);
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 14,
  });
  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  var directions = new MapboxDirections({
    accessToken: 'pk.eyJ1IjoicHJhbmF2LWpoYSIsImEiOiJjbHM2ZnN4bGoxdjV4MmtvNWZvdzM1cjN3In0.lc2HGOt95xjLVtivg9KvfQ',
  });
  
  
  map.addControl(directions, 'top-left');
}
ss