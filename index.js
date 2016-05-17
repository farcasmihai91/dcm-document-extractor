/**
 * Written by Farcas Mihai
 */
var fs = require('fs');
var path = require('path');
var options = require('./options');
var extractor = require('./extractfile');

// The shellscript accepts parameters
var dcmDirectory = options.dcmDirectory
var outDirectory = options.outDirectory

console.log(`from ${dcmDirectory} to ${outDirectory}`);

if (fs.existsSync(dcmDirectory)) {
  extractor.extractEmbeddedDocument(dcmDirectory).then(
    function (buffer) {
      fs.writeFile('C:/test.pdf', buffer, 'utf8', function (err) {
        if(err){
          return console.log(err);
        }
        console.log('success');
      });
    }
  );
} else {
  console.log('ERROR: No file at source')
}