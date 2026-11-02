import {mkdirSync,cpSync} from 'node:fs';
import './check.mjs';
mkdirSync('dist',{recursive:true});
for(const path of ['index.html','styles.css','executive.css','editorial.css','ai-visual.css','data.js','cases.js','app.js','executive.js','editorial.js','ai-visual.js','assets','.nojekyll','robots.txt','sitemap.xml'])cpSync(path,`dist/${path}`,{recursive:true});
console.log('Static production site built in dist/; the GitHub Pages root remains compatible.');
