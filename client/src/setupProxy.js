const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(proxy(['/searchByTitle', '/getDetailsById'], { target: 'http://localhost:5000' }));
}