// requiring node packages
const fs = require("fs");
const axios = require("axios");
const moment = require("moment");

// movie search with omdb
const movie = (args) => {
    if (!args){
        args = "Mr Nobody"
    };
    console.log("Searching OMDB...");
    axios.get(`http://www.omdbapi.com/?t=${args}&apikey=trilogy`)
        .then(
            res => {
                // console.log(res);
                // set response variables
                let title = res.data.Title;
                let year = res.data.Year;
                let imdb = res.data.imdbRating;
                let rt = res.data.Ratings[1] ? res.data.Ratings[1].Value : undefined;
                let country = res.data.Country;
                let lang = res.data.Language;
                let plot = res.data.Plot;
                let actors = res.data.Actors;

                // log response
                console.log(`${title} came out in ${year} in ${country} in languages ${lang}.\nThe plot is: ${plot}\nActors are: ${actors}.\nThe movie is rated ${imdb} on IMDB and ${rt ? rt + " on rotten tomatoes": "has no rating on rotten tomatoes"}.`);

                // write response to log file
                fs.appendFile(
                    "log.txt",
                    `${moment()}: You searched OMDB for the movie ${args}. You found that ${title} came out in ${year} in ${country} in languages ${lang}.\nThe plot is: ${plot}\nActors are: ${actors}.\nThe movie is rated ${imdb} on IMDB and ${rt ? rt + " on rotten tomatoes": "has no rating on rotten tomatoes"}.\n`,
                    error => {
                        if (error) {
                            console.log(error)
                        }
                        console.log("Log data appended to file")
                    }
                )
            }
        )
        .catch(error => {
            if (error){
                console.log(error)
            } else{
                console.log(`Oh no! It doesn't look like ${args} is a movie in OMDB's database.`)
            }
        });
}

module.exports = movie;