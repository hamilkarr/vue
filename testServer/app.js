const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (req, res) => {
  const list = [
    { title: "책 제목1", price: 10000 },
    { title: "책 제목2", price: 15000 },
    { title: "책 제목3", price: 20000 },
  ];
  res.json(list);
});

app.listen(3000, () => {
  console.log("서버대기중!");
});
