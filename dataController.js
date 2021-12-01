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
      return res.json({
        success: 'Данные успешно переданы',
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
