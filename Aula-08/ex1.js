/*
    Crie duas páginas HTML. Umas das páginas deve abrir a outra em um iframe e enviar um array com alguns valores. A página que foi aberta no iframe deverá mostrar os itens do array em um elemento select.
*/

function displayIframe() {
    let iframe = document.getElementById('iframe');
    let button1 = document.getElementById('ex1_button1');
    let button2 = document.getElementById('ex1_button2');

    iframe.style.display = "block";
    button1.style.display = "none";
    button2.style.display = "block";
}

function sendMessage() {
    let iframe = document.getElementById('iframe');
    const animaisFavoritos = ['Gato', 'Cachorro', 'Passarinho'];

    iframe.contentWindow.postMessage(animaisFavoritos, "*")
}

window.addEventListener("message", (evento)=> {
    evento.data.forEach(addOption);
});
        
function addOption(item) {
    let select = document.getElementById('select');
    let option = document.createElement('option');

    option.appendChild(document.createTextNode(item));
    option.value = item;

    select.appendChild(option);
};