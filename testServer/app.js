const express = require("express");
const path = require("path");
app = express();

app.use(express.static(path.join(__dirname, "public/dist")));

app.listen(3000, () => {
  console.log("서버 실행중!");
});
