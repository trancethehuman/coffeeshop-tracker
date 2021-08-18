const generatePDF = require('./services/generatePDF');
const pdf2json = require('./services/pdf2json');
const prompt = require('prompt-sync')();

const parsePDFWithPrompt = (sourcePDFPath) => {
    const input = prompt(`Parse PDF source and out a JSON file? y/n `);
    if (input == `y` || `yes`) {
        pdf2json(sourcePDFPath);
    }
}

const generatePDFWithPrompt = (sourceJSON) => {
    const input = prompt(`Generate PDF from JSON source? y/n `);
    if (input == `y` || `yes`) {
        generatePDF(sourceJSON);
    }
}

const sourcePDFPath = `./testData/sourcePDF.pdf`;
const sourceJSON = require('./testData/patients.json');

parsePDFWithPrompt(sourcePDFPath);
generatePDFWithPrompt(sourceJSON);


