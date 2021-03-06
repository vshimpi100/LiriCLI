const concert = require("./concert-search");
const music = require("./music-search");
const movie = require("./movie-search");
const file = require("./file-parse");

// Determine what operation to run based on user input
// Then perform that function
const runBot = (operation, query) => {
        switch (operation) {
            case "concert-this":
                concert(query);
                break;
            case "spotify-this-song":
                music(query);
                break;
            case "movie-this":
                movie(query);
                break;
            case "do-what-it-says":
                file();
                break;
            default:
                console.log("Uh, that's not an function I know")
                break;
        }
    }

module.exports = runBot;