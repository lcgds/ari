if (navigator.geolocation) {
    // Geolocalização disponível
} else {
    alert('Geolocalização não suportador pelo navegador em uso.')
}

function verificarLocalizacao() {
    let map1 = document.getElementById('linkMap1');

    navigator.geolocation.getCurrentPosition(function(position) {

        map1.href = "https://www.openstreetmap.org/#map=15/" + position.coords.latitude + "/" + position.coords.longitude + "&layers=H";


        // x/y&layers=H
    })

    map1.style.visibility = "visible";
};

function gerarLocalizacao() {
    let map2 = document.getElementById('linkMap2');

    let latitude = document.getElementById("latitude");

    let longitude = document.getElementById("longitude");

    map2.href = "https://www.openstreetmap.org/#map=15/" + latitude.value + "/" + longitude.value + "&layers=H"

    map2.style.visibility = "visible";
}