const { sourceServicesData } = require('../src/data/sourceServicesData.js');

const eligList = new Set();
const procList = new Set();
const notesList = new Set();

sourceServicesData.forEach(s => {
  if (Array.isArray(s.eligibility)) {
    s.eligibility.forEach(e => eligList.add(typeof e === 'string' ? e : e.en));
  }
  if (Array.isArray(s.process)) {
    s.process.forEach(p => procList.add(typeof p === 'string' ? p : p.en));
  }
  const n = s.notes || s.importantNotes;
  if (Array.isArray(n)) {
    n.forEach(item => notesList.add(typeof item === 'string' ? item : item.en));
  }
});

console.log('Unique Eligibility strings:', eligList.size);
console.log('Unique Process strings:', procList.size);
console.log('Unique Notes strings:', notesList.size);
console.log('Total sentences to translate:', eligList.size + procList.size + notesList.size);
