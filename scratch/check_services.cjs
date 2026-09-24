const fs = require('fs');

const files = ['educationServices.js', 'jobServices.js', 'printingServices.js', 'computerCourses.js', 'utilityServices.js'];

files.forEach(f => {
  const code = fs.readFileSync('./src/data/services/' + f, 'utf8');
  console.log('=== ' + f + ' ===');
  const matches = code.match(/id:\s*['"]([^'"]+)['"]/g);
  console.log('Count:', matches ? matches.length : 0);
  
  // Also collect sample strings from constants
  const consts = code.match(/const\s+([A-Z0-9_]+)\s*=\s*(\[[^\]]+\]|"[^"]+");/g);
  if (consts) {
    console.log('Constants found:', consts.length);
  }
});
