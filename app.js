var express = require('express')
var app = express()
var fs = require("fs");
var characterPath = __dirname + "/data/characters/";
var Character = require("./character/character");

app.get('/', function (req, res) {
  res.send('Hello World!')

})

function main (data) {

}

var characters = [];

function createCharacter (character) {

  var char = new Character(character);
  characters.push(char);

}






fs.readdir(characterPath, (err, data) => {
  if (err) {
        throw err;
  }

  for (var i = 0; i < data.length; i++) {
    var char = require(characterPath+data[i]);
    createCharacter(char);
  }

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
    main(6);
})
