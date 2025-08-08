const fs = require('fs');
const path = require('path');

if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}
fs.copyFileSync('index.js', path.join('dist','index.js'));
fs.copyFileSync('package.json', path.join('dist','package.json'));
console.log('Built to dist/');
