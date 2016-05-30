"use strict";

console.log('empiezo');

// funcion que espera con callback
function espera(milis, n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n % 2 !== 0) {
        return reject('error!');
      }
      resolve('dato' + n);

    }, milis);

  });
}

/*espera(2000, 5).then(res => {
    console.log('resultado', res);
});*/

sync( function*() {
  try {

    let res = yield espera(2000, 10);
    console.log(res);

    res = yield espera(2000, 11);
    console.log(res);

    res = yield espera(2000, 12);
    console.log(res);
  } catch (err) {
    console.log('Error:', err);
  }
})();



function sync(makeGenerator){
  return function () {
    var generator = makeGenerator.apply(this, arguments);
    function handle(result){
      // result => { done: [Boolean], value: [Object] }
      if (result.done) return Promise.resolve(result.value);

      return Promise.resolve(result.value).then(function (res){
        return handle(generator.next(res));
      }, function (err){
        return handle(generator.throw(err));
      });
    }

    try {
      return handle(generator.next());
    } catch (ex) {
      return Promise.reject(ex);
    }
  }
}
