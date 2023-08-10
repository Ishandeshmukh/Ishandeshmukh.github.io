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

    if(!navigator.geolocation) {
        console.log("Your browser dosent support geolocation feature! Please use latest version of chrome to access")
    } else {
        navigator.geolocation.getCurrentPostion(getPosition)
    }
    function getPosition(position){
        console.log(position)
        var lat = position.coords.latitude
        var long = position.coords.longitude
        var accuracy = position.coords.accuracy

        var marker = L.marker([lat, long]).addTo(mymap)

        

        console.log("Your coordinates are: Lat: "+ lat +" Long: "+ long+ " Accuracy: "+ accuracy)
    
    }
  

    

}