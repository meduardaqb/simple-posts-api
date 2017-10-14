'use strict'

module.exports = function(app) {
    app.use('/posts', require('./posts/index.js'));
    app.use('/login', require('./auth/index.js'));
}