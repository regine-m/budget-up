const sass = require('node-sass');
const fs = require('fs');

const inputFile = './sass/custom.scss';
const outputFile = './src/custom.css';

sass.render(
  {
    file: inputFile,
    outputStyle: 'compressed', // You can set this to 'expanded' during development for easier debugging
  },
  (error, result) => {
    if (!error) {
      fs.writeFile(outputFile, result.css, (err) => {
        if (!err) {
          console.log(`Custom SCSS successfully compiled to CSS: ${outputFile}`);
        } else {
          console.error('Error writing CSS file:', err);
        }
      });
    } else {
      console.error('Error compiling SCSS:', error);
    }
  }
);
