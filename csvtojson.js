let csvToJson = require('convert-csv-to-json');

let fileInput = 'input.csv';
let fileOutput = 'output.json';

csvToJson.generateJsonFileFromCsv(fileInput, fileOutput);