const request = require('request');

module.exports = (app) => {

    // API call to grab all movies by title
    app.get('/searchByTitle/:title', (req, res) => {
        request.get(
            { 
                url:"http://www.omdbapi.com/?apikey=4c69ea28&s=" + req.params.title
            }, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    res.json(body);
                } 
            })
    });

    // API call to grab extended movie details
    app.get('/getDetailsById/:id', (req, res) => {
        request.get(
            { 
                url:"http://www.omdbapi.com/?apikey=4c69ea28&i=" + req.params.id + "&plot=full"
            }, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    res.json(body);
                } 
            })
    });
};