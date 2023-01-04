require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const line = require("@line/bot-sdk");
const lineConfig = require("./src/configs/line.config");
const handleEvent = require("./src/handleEvents/handleEvent");

const app = express();

app.post("/", line.middleware(lineConfig), (req, res) => {
  Promise.all(req.body.events.map(handleEvent)).then((result) =>
    res.json(result)
  );
});

app.post("/webhook", line.middleware(lineConfig), (req, res) => {
  Promise.all(req.body.events.map(handleEvent)).then((result) =>
    res.json(result)
  );
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(4000, () => console.log(`Server is running on port ${4000}`));
