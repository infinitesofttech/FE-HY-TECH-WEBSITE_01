const fs = require('fs');
const { sourceServicesData } = require('../src/data/sourceServicesData.js');

const servicesList = sourceServicesData.map(s => {
  return {
    id: s.id,
    titleEn: s.title,
    titleGu: s.titleGujarati,
    eligibility: s.eligibility || [],
    process: s.process || [],
    notes: s.notes || s.importantNotes || []
  };
});

fs.writeFileSync('./scratch/source_strings.json', JSON.stringify(servicesList, null, 2), 'utf8');
console.log('Saved scratch/source_strings.json');
