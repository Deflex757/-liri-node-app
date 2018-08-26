var request = require('request');

module.exports = function lookforit(movie_title) {
    var queryURL= "http://www.omdbapi.com/?apikey=trilogy&t=" + movie_title;
    
    request(queryURL, function(error,response,body){
        var data =JSON.parse(response.body);
        var imdbObj = {
            "Movie title: ": data.Title,
            "Movie Year: " : data.Year,
            "IMDB Rating: ": data.Ratings[0].Value,
            "Rotten Tomatoes Rating: ": data.Ratings[1].Value,
            "Country: " : data.Country,
            "Language: ": data.Language,
            "Plot: " : data.Plot,
            "Actors: ": data.Actors,
         }
        if (error){
            error("No such movie");
        }
        else{
            console.log(imdbObj);
        }
    })
}