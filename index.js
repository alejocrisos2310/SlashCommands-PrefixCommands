const { Client } = require('discord.js');
const client = new Client({
    intents: ["Guilds", "GuildMembers", "GuildMessages", "MessageContent"],
    partials: ["User", "Message", "GuildMember", "ThreadMember"],
	shards: "auto"
});

require('dotenv').config()

const handlers = ['collections', 'slashCommands', 'commands', 'database', 'events']
handlers.forEach(handler => require(`./src/handlers/${handler}`)(client))

client.login(process.env.token)