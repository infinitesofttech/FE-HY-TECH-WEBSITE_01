const { educationServices } = require('../src/data/services/educationServices.js');
const { jobServices } = require('../src/data/services/jobServices.js');
const { printingServices } = require('../src/data/services/printingServices.js');
const { computerCourses } = require('../src/data/services/computerCourses.js');
const { utilityServices } = require('../src/data/services/utilityServices.js');

const allOther = [
  ...educationServices,
  ...jobServices,
  ...printingServices,
  ...computerCourses,
  ...utilityServices
];

console.log('Other services count:', allOther.length);
let docCount = 0, eligCount = 0, procCount = 0;
allOther.forEach(s => {
  if (s.requiredDocuments) docCount += s.requiredDocuments.length;
  if (s.eligibility) eligCount += (Array.isArray(s.eligibility) ? s.eligibility.length : 1);
  if (s.process) procCount += (Array.isArray(s.process) ? s.process.length : 1);
});
console.log({ docCount, eligCount, procCount });
