const Discord = require('discord.js')
const fs = require('fs');

module.exports = async (client) => {      

    let slashArray = [];
    let slashNumber = 0

    const commandFolders = fs.readdirSync("./src/slashCommands/");
    for (const folder of commandFolders) {
	    const commandFiles = fs.readdirSync(`./src/slashCommands/${folder}`).filter(file => file.endsWith(".js"));

	    for (const file of commandFiles) {
		    const files = require(`../slashCommands/${folder}/${file}`);
        
            client.slashCommands.set(files.data.name, files);
            slashArray.push(files.data.toJSON());

            slashNumber++
            continue;
        }
    }

    await new Discord.REST({ version: "10" }).setToken(process.env.token).put(
        Discord.Routes.applicationCommands('1062260302512652359'), {
            body: slashArray
        }
    )

    client.slashCommands.set(slashArray);
}