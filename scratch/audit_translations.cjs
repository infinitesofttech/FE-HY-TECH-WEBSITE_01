const fs = require('fs');

async function main() {
  const transModule = await import('../src/data/translationsDictionary.js');
  const dict = transModule.mergedDictionary;
  console.log('Total entries in mergedDictionary:', Object.keys(dict).length);

  // Load source services
  const sourceModule = await import('../src/data/sourceServicesData.js');
  const sourceServices = sourceModule.sourceServicesData;
  console.log('Source services count:', sourceServices.length);

  // Load other services directly
  const eduModule = await import('../src/data/services/educationServices.js');
  const jobModule = await import('../src/data/services/jobServices.js');
  const printModule = await import('../src/data/services/printingServices.js');
  const compModule = await import('../src/data/services/computerCourses.js');
  const utilModule = await import('../src/data/services/utilityServices.js');

  const sourceSlugs = new Set(sourceServices.map(s => s.slug || s.id));
  const nonDuplicateOtherServices = [
    ...eduModule.educationServices,
    ...jobModule.jobServices,
    ...printModule.printingServices,
    ...compModule.computerCourses,
    ...utilModule.utilityServices
  ].filter(s => !sourceSlugs.has(s.slug) && !sourceSlugs.has(s.id));

  const allServices = [
    ...sourceServices,
    ...nonDuplicateOtherServices
  ];
  console.log('Total all services count:', allServices.length);

  const missingEligibility = new Set();
  const missingProcess = new Set();
  const missingNotes = new Set();
  const missingDocs = new Set();
  const missingOther = new Set();

  allServices.forEach(s => {
    // Check eligibility
    (s.eligibility || []).forEach(e => {
      const text = typeof e === 'object' ? (e.en || e.title || '') : String(e).trim();
      if (text && !dict[text]) missingEligibility.add(text);
    });

    // Check process
    (s.process || []).forEach(p => {
      const text = typeof p === 'object' ? (p.en || p.title || '') : String(p).trim();
      if (text && !dict[text]) missingProcess.add(text);
    });

    // Check notes / importantNotes
    (s.notes || s.importantNotes || []).forEach(n => {
      const text = typeof n === 'object' ? (n.en || n.title || '') : String(n).trim();
      if (text && !dict[text]) missingNotes.add(text);
    });

    // Check documents / requiredDocuments
    const docs = s.documents || s.requiredDocuments || [];
    docs.forEach(d => {
      const text = typeof d === 'object' ? (d.en || d.title || '') : String(d).trim();
      if (text && !dict[text]) missingDocs.add(text);
    });

    // Operations documents
    if (s.operations) {
      Object.values(s.operations).forEach(op => {
        (op.documents || []).forEach(d => {
          const text = typeof d === 'object' ? (d.en || d.title || '') : String(d).trim();
          if (text && !dict[text]) missingDocs.add(text);
        });
      });
    }

    // newApplication / correctionUpdate
    (s.newApplication || []).forEach(na => {
      const text = typeof na === 'object' ? (na.en || na.title || '') : String(na).trim();
      if (text && !dict[text]) missingOther.add(text);
    });
    (s.correctionUpdate || []).forEach(cu => {
      const text = typeof cu === 'object' ? (cu.en || cu.title || '') : String(cu).trim();
      if (text && !dict[text]) missingOther.add(text);
    });
  });

  console.log('\n--- Missing Translations Summary ---');
  console.log('Missing Eligibility:', missingEligibility.size);
  console.log('Missing Process:', missingProcess.size);
  console.log('Missing Notes:', missingNotes.size);
  console.log('Missing Docs:', missingDocs.size);
  console.log('Missing Other (newApp/correction):', missingOther.size);

  const report = {
    missingEligibility: Array.from(missingEligibility),
    missingProcess: Array.from(missingProcess),
    missingNotes: Array.from(missingNotes),
    missingDocs: Array.from(missingDocs),
    missingOther: Array.from(missingOther),
  };

  fs.writeFileSync('./scratch/missing_report.json', JSON.stringify(report, null, 2), 'utf8');
  console.log('Saved report to scratch/missing_report.json');
}

main().catch(console.error);
