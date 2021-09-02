const PDFParser = require('pdf2json');
const fs = require('fs');
const beautify = require('json-beautify');
const StringifyStream = require('stringifystream');

const pdf2json = (pdfPath) => {

    let inputStream = fs.createReadStream(pdfPath, {bufferSize: 64 * 1024});
    let outputStream = fs.createWriteStream('testResults/results.json');

    inputStream.pipe(new PDFParser()).pipe(new StringifyStream()).pipe(outputStream);

    console.log(`PDF parsed.`)

}

module.exports = pdf2json;
