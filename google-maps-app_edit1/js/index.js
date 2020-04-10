function initMap() {
    // every time we can change the var like sydney and the lat and lng also and we will shift to another locatoin
    var losAngeles = {
         lat: 34.063380, lng: -118.358080 
        };
    map = new google.maps.Map(document.getElementById('map'), {
        center: losAngeles,
        zoom: 11,
        mapTypeId: 'roadmap',
    });
}