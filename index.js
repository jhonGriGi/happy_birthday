var darwinVideo = document.getElementById('gift');
var mostrarVideo = document.getElementById('video');
var caja = document.getElementById('box')

darwinVideo.onclick = function() {
    mostrarVideo.classList.toggle('darwinVideo');
    mostrarVideo.classList.toggle('show');
    caja.classList.toggle('caja');
    caja.classList.toggle('caja-show');
}

