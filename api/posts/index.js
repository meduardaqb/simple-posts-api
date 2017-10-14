var controller = require('./postsController');
var router = require('express').Router({ mergeParams: true });

router.get('/', function (req, res) {
    var headers = req.headers;

    controller.verifyTokenJWT(headers)
        .then(function (data) {
            var dataPosts = controller.getPosts();
            res.status(dataPosts.status);
            res.json({ DATA: dataPosts.DATA });
        })
        .catch(function (error) {
            res.status(400);
            res.json(error);
        })
})

router.get('/:id', function (req, res) {
    let id = req.params.id
    let headers = req.headers;

    controller.verifyTokenJWT(headers)
        .then(function (data) {
            var post = controller.getPostsById(id);
            res.status(post.status);
            res.json({ DATA: post.DATA });
        })
        .catch(function (error) {
            res.status(400);
            res.json(error);
        })
});

router.post('/', function (req, res) {
    let bodyRequest = req.body;
    let headers = req.headers;

    controller.verifyTokenJWT(headers)
        .then(function (data) {
            var result = controller.createNewPost(bodyRequest);
            res.status(result.status);
            res.json({ DATA: result.DATA });
        })
        .catch(function (error) {
            res.status(400);
            res.json(error);
        })
});


router.patch('/:id', function (req, res) {
    let bodyRequest = req.body;
    let id = req.params.id;
    let headers = req.headers;

    controller.verifyTokenJWT(headers)
        .then(function (data) {
            var result = controller.patchPost(id, bodyRequest);
            res.status(result.status);
            res.json({ DATA: result.DATA });
        })
        .catch(function (error) {
            res.status(400);
            res.json(error);
        })
});

router.put('/:id', function (req, res) {
    var bodyRequest = req.body;
    let id = req.params.id

    let headers = req.headers;

    controller.verifyTokenJWT(headers)
        .then(function (data) {
            var result = controller.putPost(id, bodyRequest);
            res.status(result.status);
            res.json({ DATA: result.DATA });
        })
        .catch(function (error) {
            res.status(400);
            res.json(error);
        })
});

router.delete('/:id', function (req, res) {
    let id = req.params.id
    let headers = req.headers;

    controller.verifyTokenJWT(headers)
        .then(function (data) {
            var result = controller.deletePost(id);
            res.status(result.status);
            res.json({ DATA: result.DATA });
        })
        .catch(function (error) {
            res.status(400);
            res.json(error);
        })
});

module.exports = router;