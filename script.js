let map;
function initMap(){
    map= new google.maps.Map(document.getElementById("map"),{
        center:{lat: 22.3072, lng: 73.1812  },
        zoom: 8
    });
new google.maps.Marker({
    position: {lat: 22.3072 ,lng: 73.1812},
    map: map,
    label: "A",
    title: "Vadodara",
    draggable: true,
})
}

