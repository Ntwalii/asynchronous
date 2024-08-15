new Promise(function(resolve) {
    console.log('first');
    resolve();
    console.log('secnd');
  }).then(function() {
    console.log('third');
  });