const fs = require('fs');
const s = require('./source_strings.json');
const proc = new Set();
s.forEach(item => {
  item.process.forEach(p => proc.add(p));
});
const list = [...proc];
fs.writeFileSync('./scratch/core_process_list.json', JSON.stringify(list, null, 2), 'utf8');
console.log('Saved', list.length, 'process strings');
