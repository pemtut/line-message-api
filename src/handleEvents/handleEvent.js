const { pinkEvent, greenEvent, blueEvent, purpleEvent } = require("./events");

function handleEvent(event) {
  if (event.type !== "message" || event.message.type !== "text") {
    return Promise.resolve(null);
  }

  switch (event.message.text) {
    case "Pink":
      pinkEvent(event);
      break;
    case "Green":
      greenEvent(event);
      break;
    case "Blue":
      blueEvent(event);
      break;
    case "Purple":
      purpleEvent(event);
      break;
    default:
  }
}

module.exports = handleEvent;
