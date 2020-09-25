const { Listener } = require("discord-akairo");

class IAmListener extends Listener {
  constructor() {
    super("iam", {
      event: "message",
      emitter: "client",
    });
  }

  exec(message) {
    if (message.author.bot) {
      return;
    }

    let lowercaseMessage = message.content.toLowerCase();
    let new_nickname;

    if (message.content.startsWith("i am") || message.content.startsWith("im") || message.content.startsWith("i'm")) {
      if (message.content.startsWith("i am")) {
        new_nickname = message.content.split("i am ");
      } else
      if (message.content.startsWith("im")) {
        new_nickname = message.content.split("im ");
      } else 
      if (message.content.startsWith("i'm")) {
        new_nickname = message.content.split("i'm ");
      }

      message.member.setNickname(new_nickname[1])
        // .catch(message.channel.send("Sorry, cobba, it seems I don't have perms to change yer nickname."))
    }
  }
}

module.exports = IAmListener;