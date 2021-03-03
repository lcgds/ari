function desenharBandeira() {
    // seta o canvas da bandeita
    let bandeira = document.getElementById('bandeira');
    let ctxBandeira = bandeira.getContext('2d');

    // gera retângulo verde na bandeira
    ctxBandeira.fillStyle = 'rgb(22, 155, 98)';
    ctxBandeira.fillRect(0, 0, 200, 300);

    // gera retângulo branco na bandeira
    ctxBandeira.fillStyle = 'white';
    ctxBandeira.fillRect(200, 0, 200, 300);

    // gera retângulo laranja na bandeira
    ctxBandeira.fillStyle = 'rgb(255, 136, 62)';
    ctxBandeira.fillRect(400, 0, 200, 300);

    // gera contorno nas extremidades da bandeira
    ctxBandeira.strokeStyle = 'black';
    ctxBandeira.strokeRect(0, 0, 600, 300);
}

function desenharHQ() {
    // seta o canvas da bandeita
    let hq = document.getElementById('hq');
    let ctxHq = hq.getContext('2d');

    // gera caixa de texto
    ctxHq.fillStyle = 'black';
    ctxHq.lineWidth = 3;
    ctxHq.beginPath();
    ctxHq.moveTo(0, 0);
    ctxHq.lineTo(0, 100);
    ctxHq.lineTo(50, 100);
    ctxHq.lineTo(50, 150);
    ctxHq.lineTo(100, 100);
    ctxHq.lineTo(300, 100);
    ctxHq.lineTo(300, 0);
    ctxHq.lineTo(0, 0);

    ctxHq.stroke();
    //ctxHq.strokeRect(50, 15, 400, 120);

    // gera texto
    ctxHq.font = "35px Comic";
    ctxHq.fillText("OLÁ MUNDO!", 40, 60);
}