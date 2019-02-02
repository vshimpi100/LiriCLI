// requiring node packages
const fs = require("fs");

// we cannot call the actual runBot because it is a circular reference and Node returns an empty object
// the workaround is to do this - make a runBot version that does not include fileparse
const runBot = require("./runBot_nofileparse");

// read actions to perform from file
const file = () => {
    console.log("Let's see what this file says...");

    fs.readFile("random.txt", "utf8", (error, data) => {

        if (error) {
            return console.log(error);
        };

        // console.log(data);

        // split datas into lines
        var dataArr = data.split("\n");

        dataArr.forEach(line => {
            // switch each line into operation and query
            opArr = line.split(", ");
            op = opArr[0];
            q = opArr[1];
            console.log(op,q);
            runBot(op,q);
        });
    });
};

module.exports = file;