const services = require('../src/data/services.js').default || require('../src/data/services.js').services;
const pan = services.find(s => s.id && s.id.includes('pan'));
console.log('PAN service found:', pan ? pan.id : 'none');
if (pan) {
  console.log('Title:', pan.title);
  console.log('Elig:', pan.eligibility);
  console.log('Process:', pan.process);
}
