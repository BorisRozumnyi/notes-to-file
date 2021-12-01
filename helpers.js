const fs = require('fs');

const writeFileAsync = async (path, data) =>
  new Promise((resolve, reject) =>
    fs.writeFile(path, data, (err) => {
      if (err) reject(err.message);
      resolve();
    })
  );

const appendFileAsync = async (path, data) =>
  new Promise((resolve, reject) =>
    fs.appendFile(path, data, (err) => {
      if (err) reject(err.message);
      resolve();
    })
  );

const readFileAsync = async (path) =>
  new Promise((resolve, reject) =>
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) reject(err.message);
      resolve(data);
    })
  );

const removeFileAsync = async (path) =>
  new Promise((resolve, reject) =>
    fs.rm(path, (err, data) => {
      if (err) reject(err.message);
      resolve();
    })
  );

const isFileExists = async (path, fileName) =>
  new Promise((resolve, reject) =>
    fs.readdir(path, (err, files) => {
      if (err) reject(err.message);
      resolve(files.find((file) => file === `${fileName}.txt`));
    })
  );

const showList = async (path) =>
  new Promise((resolve, reject) =>
    fs.readdir(path, (err, files) => {
      if (err) reject(err.message);
      resolve(files.map((file) => file));
    })
  );

module.exports = {
  writeFileAsync,
  appendFileAsync,
  readFileAsync,
  removeFileAsync,
  isFileExists,
  showList,
};
