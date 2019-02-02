// run function
const runBot = require("./functions/runBot");

// Parse user input
op = process.argv[2];
q = process.argv.slice(3).join(" ");

// Run the bot
runBot(op,q);
