const {Command}  = require('discord-akairo');
const dad = require('../../../dadJokes.json');
const dj = new Dadjokes();

class Setup extends Command {
  constructor() {
    super('setup', {
      aliases: ['setup'],
      
    });
  }

  exec(message) {
    dj.randomJoke() 
      .then(res => message.reply(res))
      .catch(err => message.reply("EmEE, iM DruNiK" + err))
  }
}

module.exports = Setup;