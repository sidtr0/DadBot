const { Listener } = require("discord-akairo");

class Ready extends Listener {
  constructor() {
    super("ready", {
      event: "ready",
      emitter: "client",
    });
  }

  exec() {
    console.log("Dad bot is ready!");
  }
}

module.exports = Ready;