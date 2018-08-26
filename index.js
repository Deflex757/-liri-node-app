var findMovie = require("./imdb.js")
var findSong = require("./spotify.js")
var seeTweets = require("./twitter.js")
var fs = require("fs");
var readString = fs.readFileSync("random.txt", "utf8");
var readStringArr = readString.split(',');

var argOne = process.argv[2];
var argTwo = process.argv[3]
var argThree = process.argv[4]
var argFour = process.argv[5]
var argFive = process.argv[6]


// if the user gives more than one word
if (argThree){
    argTwo = process.argv[3] + " " + argThree
} else if (argFour){
    argTwo = process.argv[3] + " " + argThree + " " + argFour
} else if (argFive){
    argTwo = process.argv[3] + " " + argThree + " " + argFour + " " + argFive
} else {
    argTwo = process.argv[3]
}

if (argOne === "my-tweets" && argTwo){
    seeTweets(argTwo);
    fs.appendFileSync("log.txt", argOne + ":" + argTwo + ",");
} else if(argOne === "my-tweets"){
    seeTweets("@deflex757");
    fs.appendFileSync("log.txt", argOne + ":" + "@deflex757" + ",");
} else if (argOne === "spotify-this-song" && argTwo){
    findSong(argTwo);
    fs.appendFileSync("log.txt", argOne + ":" + argTwo + ",");
} else if(argOne === "spotify-this-song"){
    findSong("The Sign");
    fs.appendFileSync("log.txt", argOne + ":" + "The Sign" + ",");
} else if (argOne === "movie-this" && argTwo){
    findMovie(argTwo)
    fs.appendFileSync("log.txt", argOne + ":" + argTwo + ",");
} else if (argOne === "movie-this") {
    findMovie("Mr. Nobody");
    fs.appendFileSync("log.txt", argOne + ":" + "Mr. Nobody" + ",");
} else if (argOne === "printLog"){
    var log = fs.readFileSync("log.txt", "utf8");
    console.log(log.split(','));
} else if (argOne === "do-what-it-says"){
    console.log("                           ");
    console.log("This is the text in the random.txt file: " + readStringArr[0]);
    console.log("                           ");
    console.log("And this program takes it and passes it to spotify api, and the result is: ");
    findSong(readStringArr[0]);
    fs.appendFileSync("log.txt", argOne + ":" + readStringArr[0] + ",");
} else {
    console.log("                           ");
    console.log("Use one of the following: ");
    console.log("                           ");
    console.log("node index.js my-tweets");
    console.log("node index.js spotify-this-song '<song name goes here>'");
    console.log("node index.js movie-this '<movie name here>'");
    console.log("node index.js do-what-it-says");
    console.log("node index.js printLog");
}