"use strict";

console.log('empiezo');

function escribeTras2Segundos(texto, callback) {
    setTimeout(function() {
        console.log('texto' + texto);
        callback();
    }, 1000);
}

// llama a una función n veces en serie
// al finalizar llama a un callback de finalización
function serie(n, func, callbackFinalizacion) {
    if (n <= 0) {
        callbackFinalizacion();
        return;
    }
    n--;
    func(n, function() {
        serie(n, func, callbackFinalizacion);
    })
}

// invocar en serie
serie(5, escribeTras2Segundos, function(){
    console.log('Terminado!');
});
