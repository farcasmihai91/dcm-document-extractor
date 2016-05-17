/**
 * Written by Farcas Mihai
 */
var fs = require('fs');
var DicomParser = require('dicom-parser');
var options = require('./options');

// The shellscript accepts parameters
var dcmDirectory = options.dcmDirectory
var outDirectory = options.outDirectory

console.log(`from ${dcmDirectory} to ${outDirectory}`);