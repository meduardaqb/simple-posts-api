let Constants = require('../constants');
let jwt = require('jsonwebtoken');

let generateResponse = function (req, res) {
    var users = Constants.MOCK_USERS;
    var bodyRequest = req.body;

    if (isParamsValid(bodyRequest)) {
        var found = false;

        for (var index = 0; index < users.length; index++) {
            if (users[index].email == bodyRequest.email && users[index].password == bodyRequest.password) {
                res.status(200);
                var token = jwt.sign({ email: bodyRequest.email }, Constants.JWT_KEY);
                res.json({ JWT: token });
                found = true;
            }
        }
        if (!found) {
            res.status(404);
            res.json({ DATA : Constants.MESSAGES.USER_NOT_FOUND });
        }
    } else {
        res.status(400);
        res.json({ DATA : Constants.MESSAGES.INVALID_PARAMS });
    }
};

function isParamsValid(json) {
    return json.hasOwnProperty('email') & json.hasOwnProperty('password');
}

module.exports = {
    generateResponse
}