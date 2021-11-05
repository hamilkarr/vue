const member = require("../models/member");
const router = require("express").Router();

router.use((req, res) => {
  const mode = req.body.mode || req.query.mode;
  const data = req.body.mode ? req.body : req.query;
  switch (mode) {
    case "join":
      member.join(data);
      break;

    case "update":
      member.update(data);
      break;
  }
  return res.json({});
});

module.exports = router;
