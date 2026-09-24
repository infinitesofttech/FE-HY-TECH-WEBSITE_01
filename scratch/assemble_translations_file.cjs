const fs = require('fs');
const path = require('path');

const part1 = require('./temp_trans_part1.json');
const part2 = require('./temp_trans_part2.json');
const part3 = require('./temp_trans_part3.json');

const allTranslations = {
  ...part1,
  ...part2,
  ...part3
};

console.log('Total entries to write:', Object.keys(allTranslations).length);

// Generate ES module file src/data/allServicesTranslations.js
const header = `/**
 * HY-TECH Hub Centralized Bilingual Translations
 * Contains comprehensive English-to-Gujarati translations for all 76 services:
 * - Eligibility Criteria
 * - Step-by-Step Application Process
 * - Important Notes & Government Advisory
 * - Required Documents & Checklists
 * - New Application and Correction / Update Items
 */

export const allServicesTranslations = ${JSON.stringify(allTranslations, null, 2)};

export default allServicesTranslations;
`;

const targetPath = path.resolve(__dirname, '../src/data/allServicesTranslations.js');
fs.writeFileSync(targetPath, header, 'utf8');
console.log('Successfully written to', targetPath);
