// requiring node packages
const fs = require("fs");
const axios = require("axios");
const moment = require("moment");
const Spotify = require("node-spotify-api");

// API Keys
require("dotenv").config();
const keys = require("../env/keys");

// Make new spotify API instance
let spotify = new Spotify(keys.spotify);

// spotify search
const music = (args) => {
    if (!args){
        args = "The Sign"
    };
    console.log("Searching Spotify...");

    spotify.search({
        type: 'track',
        query: args,
    }, function (err, res) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        // console.log(res.tracks.items[0]);
        // set response variables
        let artist = res.tracks.items[0].artists[0].name;
        let name = res.tracks.items[0].name;
        let link = res.tracks.items[0].preview_url;
        let album = res.tracks.items[0].album.name;

        // log response
        console.log(`${name} is a song by ${artist} from the album ${album}.\nListen to it here: ${link}`);

        // write response to log file
        fs.appendFile(
            "log.txt",
            `${moment()}: You searched Spotify for the song ${name}. You found that ${name} is a song by ${artist} from the album ${album}.\nListen to it here: ${link}`,
            error => {
                if (error) {
                    console.log(error)
                }
            }
        )
    });
};

module.exports = music;