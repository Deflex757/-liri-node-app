var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: '4gdTAMMK5ILA8ndDM0n9KjY6E',
    consumer_secret: 'x00kvGhWHR7jeF84XTnY0kWrlTqOkNr1AA5KJNmoxbH8geGqM0',
    access_token_key: '1031503856390340608-TgkMr9uTxEBKFp3zbDEWdVqvJbGLd3',
    access_token_secret: 'LtfgF7sVYAhz37iP9wUMBmroV4IejvopESUF6y2TPxei7'
});

module.exports = function showTweets(person) {

var params = { screen_name: person };

client.get('statuses/user_timeline', params, function (error, tweets, response) {
    if (!error) {
        console.log("___________________________________________")
        console.log("                                           ")
        for (var i = 0; i < tweets.length; i++) {
            console.log(i + 1 + ". " + tweets[i].text);
        }
    }
});

}
