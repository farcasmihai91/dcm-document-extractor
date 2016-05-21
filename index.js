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


fs.lstat(dcmDirectory, function (err, stats) {
  if (err) {
    var error = new Error(`Source file or folder does not exist.`)
    console.log(error);
    return;
  }
  if (stats.isDirectory()) {
    var files = fs.readdirSync(dcmDirectory);
    for (var i in files) {
      var extname = path.extname(files[i]);
      if (extname === '.dcm') {
        var inPath = path.join(dcmDirectory, files[i]);
        var basename = path.basename(files[i], '.dcm') + '.pdf';
        extractor.extractEmbeddedDocument(inPath).then(
          function (buffer) {
            fs.writeFile(path.join(outDirectory, basename), buffer, 'utf8', function (err) {
              if (err) {
                return console.log(err);
              }
              console.log(`File written: ${basename}`);
            });
          }).catch(function (reason) {
            console.log(`File ${basename} cannot be written, ${reason}`);
          });
      }
    }
  } else if (stats.isFile()) {
    var basename = path.basename(dcmDirectory, '.dcm') + '.pdf';
    extractor.extractEmbeddedDocument(dcmDirectory).then(
      function (buffer) {
        fs.writeFile(path.join(outDirectory, basename), buffer, 'utf8', function (err) {
          if (err) {
            return console.log(err);
          }
          console.log(`File written: ${basename}`);
        });
      }).catch(function (reason) {
        console.log(reason);
      });
  }
})
