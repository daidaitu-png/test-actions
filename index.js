const express = require("express");

const app = express();

app.get('/', (res, res) => {
  res.send("hello test actions");
});

app.listen(9090, () => {
  console.log('server start at port 9090');
})