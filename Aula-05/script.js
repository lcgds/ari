window.addEventListener('load', function() {
    let vid = document.getElementById('vid');
})


function trocaVideo() {
    if(vid.currentSrc == 'http://lcgds.github.io/ari/Aula-05/assets/video1.webm') {
        vid.src = './assets/video2.webm';
    } else {
        vid.src = './assets/video1.webm';
    }
    vid.load();
}