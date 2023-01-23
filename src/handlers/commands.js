const Discord = require('discord.js')
const fs = require('fs');

module.exports = async (client) => {      

    const commandFolders = fs.readdirSync("./src/commands/");
    for (const folder of commandFolders) {
	    const commandFiles = fs.readdirSync(`./src/commands/${folder}`).filter(file => file.endsWith(".js"));

	    for (const file of commandFiles) {
		    const files = require(`../commands/${folder}/${file}`);        
            client.commands.set(files.name, files);
        }
    }
}