const { CommandInteraction, InteractionType } = require('discord.js')

module.exports = {
    name: "interactionCreate",

    run: async (client, interaction) => {
        if(!interaction.isChatInputCommand())return;

        const command = client.slashCommands.get(interaction?.commandName);

        if(!command){
            return interaction.reply({
                content: "El comando no existe o esta desactualizado.",
                ephemeral: true
            });
        }

        await command.run(client, interaction)
    }
}