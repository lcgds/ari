window.addEventListener('load', function() {
    let video = document.getElementById('video');
});

function alterarCanvas() {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    let img = new Image(96, 96);
    img.src = "./cat.jpg";

    ctx.clearRect(0, 0, 96, 96);

    let rand = Math.round(Math.random() * (3-1) +1 );

    if (rand === 1) {
        ctx.drawImage(img, 0,0)
    } else if (rand === 2) {
        ctx.beginPath();
        ctx.moveTo(0, 96);
        ctx.lineTo(96,96);
        ctx.lineTo(48, 0);
        ctx.fill();
    } else {
        ctx.beginPath();
        ctx.arc(48, 48, 36, 0, Math.PI * 2, true);
        ctx.fill();
    }
}


function comando(tipo) {
    switch (tipo) {
        case 'tocar':
            video.play();
            break;
        case 'pausar':
            video.pause();
            break;
        case 'aumentarVelocidade':
            video.playbackRate+= 0.5;
            break;
        case 'diminuirVelocidade':
            if(video.playbackRate != 0.5) {
                video.playbackRate-= 0.5;
            }
            break; 
        case 'aumentarVolume':
            video.volume+= 0.1;
            break;
        case 'diminuirVolume':
            video.volume-= 0.1;
            break;   
    }
}