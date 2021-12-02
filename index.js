const express = require('express');
const { dataRouter } = require('./dataRouter');
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use('/notes', dataRouter);

const start = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server started at http://localhost:${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
