const fs = require('fs');
const path = require('path');

const text = 'some content';
const notexDir = path.join(__dirname, '../notes');

const createDirectoryAsync = async (path) =>
  new Promise((resolve, reject) =>
    fs.mkdir(path, (err, data) => {
      if (err) reject(err.message);
      resolve(data);
    })
  );

const writeFileAsync = async (path, data) =>
  new Promise((resolve, reject) =>
    fs.writeFile(path, data, (err) => {
      if (err) reject(err.message);
      resolve();
    })
  );

// console.log(path.resolve(__dirname, '..'));
// if (fs.existsSync(notexDir)) {
//   console.log('Directory exists!');
// } else {
//   console.log('Directory not found.');
// }

// if (!fs.existsSync(notexDir))
//   createDirectoryAsync(path.join(notexDir))
//     .then(() => writeFileAsync(notexDir, 'text.txt'))
//     .catch((err) => console.log(err));

writeFileAsync(path.resolve(__dirname), 'text.txt');
