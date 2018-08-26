var Spotify = require('node-spotify-api');

var spotify = new Spotify({
    id: "a5f123dd73414bbfb85f779f857151f3",
    secret: "3f92d50b5e5a44bda3af72c6439cf7fa"
    });

module.exports = function findSong(input) {

    spotify.search({ type: 'track', query: input }, function (err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        } else {
            var songObj = {
                "URL: " : data.tracks.items[0].external_urls.spotify,
                "Song name: " : data.tracks.items[0].name,
                "Artist name: " : data.tracks.items[0].artists[0].name,
                "Album name: " : data.tracks.items[0].album.name,
        
            }
            console.log("___________________________________________")
            console.log("                                           ")
            console.log(songObj);
        }

        
    });

}