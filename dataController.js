const path = require('path');
const { writeFileAsync, appendFileAsync, readFileAsync, isFileExists } = require('./helpers');
const recordingDirectory = `${__dirname}/notes`;

class dataController {
  async postData(req, res) {
    try {
      const { fileName, text } = req.body;
      if (!fileName || text === undefined) {
        return res.status(400).json({
          error: {
            message: 'Не хватает данных',
            fields: [`fileName отсутствует или не заполнен`, `text отсутствует`],
          },
        });
      }

      isFileExists(recordingDirectory, fileName).then((result) => {
        if (result) {
          appendFileAsync(path.resolve(recordingDirectory, result), text);

          return res.json({
            success: `Файл ${fileName}.txt успешно обновлен`,
          });
        } else {
          writeFileAsync(path.resolve(recordingDirectory, `${fileName}.txt`), text)
            .then(() => readFileAsync(path.resolve(recordingDirectory, `${fileName}.txt`)))
            .then((data) => console.log(data))
            .catch((err) => console.log(err));

          return res.json({
            success: `Файл ${fileName}.txt успешно создан`,
          });
        }
      });
    } catch (e) {
      console.log(e);
      res.status(400).json({
        message: 'Ошибка загрузки данных',
      });
    }
  }

  async getData(req, res) {
    const data = { data: 'some data' };
    try {
      console.log('getData: ');
      res.json(data);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new dataController();
