const Discord = require('discord.js')

module.exports = {
    name: 'ready',

    run: async (client) => {
        client.user.setPresence({
            status: "idle"
        });

        console.log('bot listo')

    }
}