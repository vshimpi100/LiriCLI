// requiring node packages
const fs = require("fs");
const axios = require("axios");
const moment = require("moment");

// concert search with bands in town API
const concert = (args) => {
    console.log("Searching Bands In Town...");
    axios.get(`https://rest.bandsintown.com/artists/${args}/events?app_id=codingbootcamp`)
        .then(
            res => {
                // set response variables
                let artist = res.data[0].lineup.join(" and ");
                let venue = res.data[0].venue.name;
                let city = res.data[0].venue.city;
                let region = res.data[0].venue.region;
                let country = res.data[0].venue.country;
                // time input example 2017-03-19T11:00:00
                let date = moment(res.data[0].datetime.split("T"), "YYYY-MM-DDHH:mm:ss").format("MM/DD/YYYY");

                // log response
                console.log(`${artist} is playing at ${venue} in ${city}, ${region ? region : country} on ${date}.`);

                // write response to log file
                fs.appendFile(
                    "log.txt", 
                    `${moment()}: You searched Bands In Town for ${args} concerts. You found that ${artist} will be playing at ${venue} in ${city}, ${region ? region : country} on ${date}.\n`,
                    error => {if (error) {console.log(error)}}
                )
            }
        )
        .catch(error =>{
            console.log(`Oh no! It doesn't look like any concerts are coming up for ${args}.`)
        });
}

module.exports = concert;