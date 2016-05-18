"use strict";

var fs = require('fs');
var path = require('path');

var versionModulo = function(moduleName, callBack) {
    // definir ruta al fichero
    var fichero = path.join('./node_modules', moduleName, 'package.json');

    // leer fichero
    fs.readFile(fichero, {encoding: 'utf8'}, function(err, data) {
        if (err) {
            callBack(err);
            return;
        }

        try {
            var packageJson = JSON.parse(data);
        } catch (e) {
            callBack(e);
            return;
        }
        
        callBack(null, packageJson.version);

    });
};

versionModulo('chance', function(err, data) {
    if (err) {
        console.log('Error!', err);
        return;
    }
    console.log('La version del modulo chance es', data);
});