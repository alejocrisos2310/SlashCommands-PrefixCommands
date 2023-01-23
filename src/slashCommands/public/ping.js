const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('ver el ping del bot'),

    run: async (client, interaction) => {

        const EmbedPing = new EmbedBuilder()
        .setTitle('🏓 ¡Pong!')
        .setDescription(`*My ping is* **\`${client.ws.ping}ms\`**`)
        .setColor(client.color)

        interaction.reply({ embeds: [EmbedPing], ephemeral: true })

    }
}