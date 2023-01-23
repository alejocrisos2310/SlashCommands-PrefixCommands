const Discord = require('discord.js');

module.exports = {
  name: "messageCreate",
  
  run: async (client, message) => {
      
    if (message.author.bot || !message.guild || message.author.guild || message.channel.type === 'dm') return;

    let prefix = '-'

    if(!message.content.startsWith(prefix))return;

    if(!message.guild.members.me.permissions.has(Discord.PermissionFlagsBits.SendMessages))return;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    client.cmd = client.commands.find((c) => c.name === command || (c.alias && c.alias.includes(command)))
    if (client.cmd) {
      client.cmd.run(client, message, args, prefix);
    }
  }
}
