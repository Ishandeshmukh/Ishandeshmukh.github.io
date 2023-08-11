window.onload = init;

function init(){
    
    
    const mymap = L.map("mapid", {
        center: [21.0000, 78.0000],
        zoom: 4.5,
        layers: [
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            })
        ]
    })

    if (!navigator.geolocation) {
  console.log("Your browser doesn't support geolocation feature!");
} else {
  navigator.geolocation.getCurrentPosition(getPosition);
}
    var marker, circle, lat, long, accuracy;

function getPosition(position) {
  // console.log(position)
  lat = position.coords.latitude;
  long = position.coords.longitude;
  accuracy = position.coords.accuracy;

  if (marker) {
    mymap.removeLayer(marker);
  }

  if (circle) {
    mymap.removeLayer(circle);
  }

  marker = L.marker([lat, long]);
  circle = L.circle([lat, long], { radius: accuracy });

  var featureGroup = L.featureGroup([marker, circle]).addTo(mymap);

  map_init.fitBounds(featureGroup.getBounds());

  console.log(
    "Your coordinate is: Lat: " +
      lat +
      " Long: " +
      long +
      " Accuracy: " +
      accuracy
  );
}
}
