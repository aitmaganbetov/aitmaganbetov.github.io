import {readFileSync,existsSync} from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const sources=['data.js','cases.js','app.js','executive.js'];
for(const file of sources)new vm.Script(readFileSync(file,'utf8'),{filename:file});
const context=vm.createContext({});
vm.runInContext(readFileSync('data.js','utf8')+';globalThis.cv=CV;',context);
assert.equal(context.cv.jobs.length,11);
assert.equal(context.cv.education.length,4);
assert.equal(context.cv.courses.length,8);
const checkTranslations=value=>{if(Array.isArray(value)){if(value.length===3&&value.every(v=>typeof v==='string'))assert(value.every(v=>v.trim()));value.forEach(checkTranslations);}else if(value&&typeof value==='object')Object.values(value).forEach(checkTranslations);};
checkTranslations(context.cv);
const html=readFileSync('index.html','utf8');
for(const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)){const path=match[1];if(!/^(https?:|mailto:|tel:)/.test(path))assert(existsSync(path),`Missing asset: ${path}`);}
assert.equal(readFileSync(context.cv.pdf).subarray(0,5).toString(),'%PDF-');
assert(html.includes('application/ld+json')&&html.includes('rel="canonical"'));
console.log('PASS: JavaScript syntax, 11 roles, 4 education entries, 8 courses, translations, local assets, PDF signature and SEO metadata.');
