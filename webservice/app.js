var request = require('request');
var express = require('express');
var app = express();

require('dotenv').config()

const IMAGE_BASE = 'https://image.tmdb.org/t/p/original';
const SEARCH_BASE = 'https://api.themoviedb.org/3/search/movie';
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.get('/movies', function (req, res) {
    var searchParam = req.query.search;
    request(SEARCH_BASE + '?api_key=' + process.env.API_KEY + '&query=' + searchParam +'&region=US', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            var movieResults = [];
            for (const movie of data.results) {
                const movieToAdd = {
                    movie_id : movie.id,
                    title : movie.title,
                    poster_image_url : IMAGE_BASE + movie.poster_path,
                    popularity_summary : movie.popularity + ' out of ' + movie.vote_count + ' vote(s).'
                };
                if (movieResults.length < 10) {
                    movieResults.push(movieToAdd);
                }
            }
            res.send(movieResults);
        } else {
            console.log(error);
        }
    })
});
app.listen(process.env.PORT, function () {
    console.log('Example app listening on port ' + process.env.PORT);
});