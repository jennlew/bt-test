//Read file 
fs = require('fs');
fs.readFile('sample.csv', 'utf8', function (err,data) {

  if (err) {
    return console.log(err);
  }
//console.log(data);

  //split the array on each new line and remove the heading
  var routers = data.split(/\r?\n/)
  routers.shift();


  for (var i = 0; i < routers.length; i++) {
    routers[i] = routers[i].split(',');
  }

  // Make all letters lowercase for ease of comparison
  for (var i = 0; i < routers.length; i++) {
    routers[i][0] = routers[i][0].toLowerCase()
  }

  //patched servers and os <12 invalid
  for (var i = 0; i < routers.length; i++) {
    if (routers[i][2] === 'yes' || routers[i][3] < 12 ) {
      routers[i].push('INVALID');
    }
  }

  for (var i = 0; i < routers.length; i++) {
    for (var j = 0; j < routers.length; j++) {
        if ( routers[i][0] === routers[j][0] ) {
          if (i !== j) {
             routers[i].push('INVALID');
          }
        }
       if ( routers[i][1] === routers[j][1] ) {
          if (i !== j) {
              routers[i].push('INVALID');
          }
        }
    }
  }
  for (var i = 0; i < routers.length; i++) {
    if(routers[i][routers[i].length-1] == 'INVALID'){
    } else {
          console.log(routers[i][0]+' '+routers[i][1]+' '+routers[i][2]+' '+routers[i][3]+' '+routers[i][4])
    }
  }

});
