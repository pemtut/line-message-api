const line = require("@line/bot-sdk");
const lineConfig = require("../../src/configs/line.config");
const pinkObject = require("./replyObject/pinkObject.json");
const greenObject = require("./replyObject/greenObject.json");
const client = new line.Client(lineConfig);

function pinkEvent(event) {
  return client.replyMessage(event.replyToken, {
    type: "flex",
    altText: "This is a pink",
    contents: pinkObject,
  });
}

function greenEvent(event) {
  return client.replyMessage(event.replyToken, {
    type: "flex",
    altText: "This is a green",
    contents: greenObject,
  });
}

function blueEvent(event) {
  return client.replyMessage(event.replyToken, {
    type: "text",
    text: "blue",
  });
}

function purpleEvent(event) {
  return client.replyMessage(event.replyToken, {
    type: "text",
    text: "purple",
  });
}

module.exports = { pinkEvent, greenEvent, blueEvent, purpleEvent };
