const fs = require("fs");

module.exports = (client) => {

  const files = fs.readdirSync("./src/events");
  for (const file of files) {
    const event = require(`../events/${file}`);

    client.on(event.name, (...args) => event.run(client, ...args));
  }
  
};
