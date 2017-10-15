'use strict'

module.exports = function(app) {
    app.use('/api/posts', require('./posts/index.js'));
    app.use('/api/login', require('./auth/index.js'));
}