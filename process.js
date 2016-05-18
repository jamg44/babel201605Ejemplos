"use strict";

// información del proceso

var info = {
    pid: process.pid,
    version: process.version,
    platform: process.platform,
    title: process.title,
    arguments: process.argv,
    execPath: process.execPath,
    varibles_entorno: process.env,
    carpeta: process.cwd()
};

console.log(info);

process.on('exit', function() {
    console.log('Adios.');
});

console.log('voy a terminar');

process.exit(0);

console.log('esto no saldra por que ya he terminado')