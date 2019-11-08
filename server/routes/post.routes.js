const express = require('express');
const router = express.Router();

const PostController = require('../controllers/post.controller');

// get all posts
router.route('/posts').get(PostController.getPosts);

// add new post
router.route('/posts').post(PostController.addPost);

// get post by its ID
router.route('/posts/:id').get(PostController.getSinglePost);

// get posts by range
router.route('/posts/range/:startAt/:limit').get(PostController.getPostsByRange);

module.exports = router;