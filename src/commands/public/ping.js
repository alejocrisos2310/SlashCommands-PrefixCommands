const Discord = require('discord.js');

module.exports = {
    name: 'ping',
    alias: [],

    run: async (client, message, args) => {

        const EmbedPing = new Discord.EmbedBuilder()
        .setTitle('🏓 ¡Pong!')
        .setDescription(`*My ping is* **\`${client.ws.ping}ms\`**`)
        .setColor(client.color)

        message.reply({ embeds: [EmbedPing], allowedMentions: { RepliedUser: false } })

    }
}