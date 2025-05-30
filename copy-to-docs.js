// copy-to-docs.js
const fs = require('fs');
const fse = require('fs-extra');

const source = './build';
const destination = './docs';

if (fs.existsSync(destination)) {
  fse.removeSync(destination);
}

fse.copySync(source, destination);
console.log('✅ Файли скопійовано з build до docs');
