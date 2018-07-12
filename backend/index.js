const express = require('express');
const Twit = require('twit');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config/config');

const app = express();

//Middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

var twit = new Twit({
    consumer_key: config.consumer_key,
    consumer_secret: config.consumer_secret,
    access_token: config.access_token,
    access_token_secret: config.access_token_secret,
    timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL: true,     // optional - requires SSL certificates to be valid.
});

/* var stream = twit.stream('/search')

stream.on('tweet', function (tweet) {
    console.log(tweet)
}) */

app.get('/search', (req, res) => {
    const search = `${req.query.text}`;
    twit.get('search/tweets', { q: search, count: 10 }, function (err, data, response) {
        res.send(data);
    });
});

app.listen(config.port_no, () => {
    console.log(`Server is up on port ${config.port_no}`);
}); 