const fs = require('fs');
const services = require('../src/data/services.js').default || require('../src/data/services.js').services;

const docMap = {};
const contentMap = {};

services.forEach(s => {
  if (s.requiredDocuments) {
    s.requiredDocuments.forEach(d => {
      if (d.en && d.gu) docMap[d.en] = d.gu;
    });
  }
  if (s.operations) {
    s.operations.forEach(op => {
      if (op.documents) {
        op.documents.forEach(d => {
          if (d.en && d.gu) docMap[d.en] = d.gu;
        });
      }
    });
  }
  if (Array.isArray(s.process)) {
    s.process.forEach(p => { if (p.en && p.gu) contentMap[p.en] = p.gu; });
  }
  if (s.eligibility) {
    if (s.eligibility.en && s.eligibility.gu) contentMap[s.eligibility.en] = s.eligibility.gu;
    else if (Array.isArray(s.eligibility)) s.eligibility.forEach(e => { if (e.en && e.gu) contentMap[e.en] = e.gu; });
  }
  if (Array.isArray(s.importantNotes)) {
    s.importantNotes.forEach(n => { if (n.en && n.gu) contentMap[n.en] = n.gu; });
  }
});

const content = `/**
 * HY-TECH Hub Central Bilingual Translation Dictionary
 * Maps English topics, checklist items, documents, eligibility, and process steps to Gujarati
 */

export const documentTranslations = ${JSON.stringify(docMap, null, 2)};

export const contentTranslations = ${JSON.stringify(contentMap, null, 2)};

export const mergedDictionary = {
  ...documentTranslations,
  ...contentTranslations,
  'Aadhaar Card': 'આધાર કાર્ડ',
  'PAN Card': 'પાન કાર્ડ',
  'Ration Card': 'રેશન કાર્ડ',
  'Light Bill': 'લાઇટ બિલ',
  'Passport Photo': 'પાસપોર્ટ સાઇઝ ફોટો',
  'Passport Size Photograph': 'પાસપોર્ટ સાઇઝ ફોટોગ્રાફ',
  'School Leaving Certificate': 'શાળા છોડ્યાનું પ્રમાણપત્ર (LC)',
  'Birth Certificate': 'જન્મ પ્રમાણપત્ર',
  'Mobile Number': 'મોબાઇલ નંબર',
  'Bank Passbook': 'બેંક પાસબુક',
  'Income Certificate': 'આવકનો દાખલો',
  'Caste Certificate': 'જાતિનો દાખલો'
};

/**
 * Universal bilingual extractor
 * Always returns { en: string, gu: string }
 */
export function getBilingualText(item) {
  if (!item) return { en: '', gu: '' };
  
  if (typeof item === 'object') {
    const en = item.en || item.title || item.name || '';
    let gu = item.gu || item.titleGujarati || item.gujarati || '';
    if (!gu && en && mergedDictionary[en]) {
      gu = mergedDictionary[en];
    }
    return { en: String(en), gu: String(gu) };
  }

  const str = String(item).trim();
  const gu = mergedDictionary[str] || '';
  return { en: str, gu: gu };
}

export default {
  documentTranslations,
  contentTranslations,
  mergedDictionary,
  getBilingualText
};
`;

fs.writeFileSync('./src/data/translationsDictionary.js', content, 'utf8');
console.log('Successfully written src/data/translationsDictionary.js');
