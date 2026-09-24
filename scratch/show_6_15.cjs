const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./scratch/source_strings.json', 'utf8'));
console.log(JSON.stringify(data.slice(5, 15), null, 2));
