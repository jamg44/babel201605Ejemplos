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
function serie(arr, func, callbackFinalizacion) {
    if (arr.length <= 0) {
        callbackFinalizacion();
        return;
    }

    func(arr.shift(), function() {
        serie(arr, func, callbackFinalizacion);
    })
}

// invocar en serie
serie([1,2,3,4,5], escribeTras2Segundos, function(){
    console.log('Terminado!');
});
