let Constants = require('../constants');
var jwt = require('jsonwebtoken');

var verifyTokenJWT = function (headers) {
    return new Promise(function (resolve, reject) {
        let users = Constants.MOCK_USERS;

        if (headers.authorization) {
            var token = headers.authorization;

            jwt.verify(token, Constants.JWT_KEY, function (err, decoded) {
                if (err) {
                    var response = { DATA: Constants.MESSAGES.INVALID_JWT }
                    reject(response);
                } else {
                    let user = users.find(function (element) { if (element.email == decoded.email) { return true; } });

                    if (user) {
                        resolve()
                    } else {
                        var response = { DATA: Constants.MESSAGES.USER_NOT_FOUND }
                        reject(response);
                    }
                }
            });
        } else {
            var response = { DATA: Constants.MESSAGES.USER_NOT_AUTHENTICATED }
            reject(response);
        }
    })
}

var getPosts = function () {
    let posts = Constants.MOCK_POSTS;
    var data = { DATA: posts, status: 200 }
    return data;
}
var getPostsById = function (id) {
    let posts = Constants.MOCK_POSTS.posts;
    var found = false;
    var response;

    for (var index = 0; index < posts.length; index++) {
        var element = posts[index];

        if (element.id == id) {
            response = { DATA: element, status: 200 }
            found = true;
        }
    }
    if (!found) {
        response = { DATA: Constants.MESSAGES.POST_NOT_FOUND, status: 404 }
    }

    return response;
}
var createNewPost = function (bodyRequest) {
    if (bodyRequest && isParamsValid(bodyRequest)) {
        var post = {
            'id': Constants.MOCK_POSTS.posts.length + 1,
            'title': bodyRequest.title,
            'body': bodyRequest.body,
            'creationDate': new Date()
        }
        Constants.MOCK_POSTS.posts.push(post);
        var data = { DATA: Constants.MESSAGES.POST_ADDED, status: 201 }
        return data;
    } else {
        var data = { DATA: Constants.MESSAGES.INVALID_PARAMS, status: 400 }
        return data;
    }
};

var deletePost = function (id) {
    for (var index = 0; index < Constants.MOCK_POSTS.posts.length; index++) {
        var element = Constants.MOCK_POSTS.posts[index];

        if (element.id == id) {
            Constants.MOCK_POSTS.posts.splice(index, 1);
            var data = { DATA: Constants.MESSAGES.POST_DELETED, status: 200 };
            return data;
        }
    }
    var data = { DATA: Constants.MESSAGES.POST_NOT_FOUND, status: 404 };
    return data;
}

var patchPost = function (id, bodyRequest) {
    for (var index = 0; index < Constants.MOCK_POSTS.posts.length; index++) {
        var element = Constants.MOCK_POSTS.posts[index];

        if (element.id == id) {
            if (bodyRequest.body) {
                Constants.MOCK_POSTS.posts[index].body = bodyRequest.body;
            }
            if (bodyRequest.title) {
                Constants.MOCK_POSTS.posts[index].title = bodyRequest.title;
            }
            var data = { DATA: Constants.MESSAGES.POST_UPDATED, status: 200 };
            return data;
        }
    }
    var data = { DATA: Constants.MESSAGES.POST_NOT_FOUND, status: 404 };
    return data;
}

var putPost = function (id, bodyRequest) {
    for (var index = 0; index < Constants.MOCK_POSTS.posts.length; index++) {
        var element = Constants.MOCK_POSTS.posts[index];

        if (element.id == id) {
            Constants.MOCK_POSTS.posts[index].body = bodyRequest.body;
            Constants.MOCK_POSTS.posts[index].title = bodyRequest.title;
            Constants.MOCK_POSTS.posts[index].creationDate = new Date();
            var data = { DATA: Constants.MESSAGES.POST_UPDATED, status: 200 };
            return data;
        }
    }
    var data = { DATA: Constants.MESSAGES.POST_NOT_FOUND, status: 404 };
    return data;
}

function isParamsValid(json) {
    return json.hasOwnProperty('title') & json.hasOwnProperty('body');
}

module.exports = {
    verifyTokenJWT,
    getPosts,
    getPostsById,
    createNewPost,
    deletePost,
    patchPost,
    putPost
}