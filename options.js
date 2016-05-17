/**
 * Written by Farcas Mihai
 */
var program = require('commander');

// Setting up the version and accepted parameters (options)
program
  .version('1.0.0')
  .option('-i, --input <path>', `The file or folder path to the .dcm files containing embedded documents`)
  .option('-o, --output <path>', `The folder path where to place the extracted documents`)
  .parse(process.argv);
  
var dcmDirectory = program.input
var outDirectory = program.output

// If the required parameters are not provided, show a message and the help.
if(!dcmDirectory || !outDirectory){
  console.log(`Source and Destination paths are required.`);
  program.help();
}

module.exports = {
  dcmDirectory,
  outDirectory
};


