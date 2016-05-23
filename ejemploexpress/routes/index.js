var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var segundo = (new Date()).getSeconds();

  res.render('index', {
    title: 'Express',
    nombre: 'neo',
    sinEscapar: '<script>document.write("hola soy codigo");</script>',
    condicion: {
      segundo: segundo,
      estado: segundo % 2 === 0
    },
    users: [{name: 'Smith'}, {name: 'Jones'}, {name: 'Brown'}]
  });
  //next(new Error('error fatal de la muerte'))
});

// Ejemplo de parametros en ruta y en query-string
router.get('/:id([0-9]+)', function(req, res, next) {
  console.log('req.params', req.params);
  console.log('req.query', req.query);

  res.send('el id es el ' + req.params.id + ' y el nombre es ' + req.query.name);
});

router.get('/admin/:usuario/piso/:piso(A|B|C)', function(req, res) {
  res.send('recibido admin ' + req.params.usuario + ' piso ' + req.params.piso);
});


// Ejemplo de parametros en el body
router.post('/', function (req, res) {
  console.log('req.body', req.body);

  res.send('el body tiene un parametro price ' + req.body.price);
});

module.exports = router;
