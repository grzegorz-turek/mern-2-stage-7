const express = require('express');
const router = express.Router();

const PostController = require('../controllers/post.controller');

// get all posts
router.route('/posts').get(PostController.getPosts);

// get posts by range
router.route('/posts/range/:startAt/:limit').get(PostController.getPostsByRange);

// get post by its ID
router.route('/posts/:id').get(PostController.getSinglePost);

// add new post
router.route('/posts').post(PostController.addPost);

module.exports = router;