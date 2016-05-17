var fs = require('fs');
var dicomParser = require('dicom-parser');

function extractEmbeddedDocument(path) {

  var promise = new Promise(function (resolve, reject) {
    fs.readFile(path, function (err, data) {
      if (!err) {
        var byteArray = new Uint8Array(data);
        try {
          var dataSet = dicomParser.parseDicom(byteArray);
          var instance = dicomParser.explicitDataSetToJS(dataSet);

          var documentTitle = instance.x00420010;

          if (documentTitle) {
            var documentStartByte = instance.x00420011.dataOffset;
            var documentLength = instance.x00420011.length;

            var deflated = byteArray.slice(documentStartByte, (documentStartByte + documentLength));
            var buf = new Buffer(deflated);
            resolve(buf);
          }
        } catch (err) {
          console.log(err);
          resolve(err);
        };
      };
    });
  });

  return promise;
}

module.exports = {
  extractEmbeddedDocument: extractEmbeddedDocument
}