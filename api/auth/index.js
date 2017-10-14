let controller = require('./authController');
let router = require('express').Router({ mergeParams: true });

router.post('/', function (req, res) {
    controller.generateResponse(req, res);
});

module.exports = router;