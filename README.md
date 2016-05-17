<h1># dcm-document-extractor<h1>
<h2>Cross-platform shell script that extracts the embedded PDF document from a DICOM file.</h2>
<p>Prerequisites:<br>
 - Install node https://nodejs.org/<br>
 - run: 'npm install' from the script's folder.<p>
<p>To run use: <i><b> node ./index.js -i 'dicom/path' -o 'pdf/path'.</b></i> from the script's location.<br>
<p>The script accepts a dcm file or a folder containing one or more .dcm files as imput, and a folder path where to place the pdf file(s) as output.<br>
The output files will have the same base name as the input files</p>
To see more infromation use: <i><b> node /index.js --help</b></i></p>
