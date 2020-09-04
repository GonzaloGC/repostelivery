function initMap(){

    const coords = {
        lat: -33.6220656,
        lng: -70.8702453
    };

    let map = new google.maps.Map(document.getElementById('map'),{
        center: coords,
        zoom: 15,
        // mapTypeID: google.maps.MapTypeId.ROADMAP,
    });

    let marker = new google.maps.Marker({
        position: coords,
        map,
        title: 'Repostelivery'
    })
}

initMap();