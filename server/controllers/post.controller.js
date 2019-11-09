const Post = require('../models/post.model');
const uuid = require('uuid');

// get all posts
exports.getPosts = async (req, res) => {
    try {
        res.status(200).json(await Post.find());
    } catch(err) {
        res.status(500).json(err);
    }
};

// get single post by id
exports.getSinglePost = async (req, res) => {
    try {
        res.status(200).json(await Post.findOne({ id: req.params.id }));
        //res.status(200).json(await Post.find({id: req.params.id})); // ----------------------- TEST -------------------------
    } catch(err) {
        res.status(500).json(err);
    }
};

// add new post
exports.addPost = async (req, res) => {
    try {
    
        /* to co poniżej skracamy do: let newPost = new Post(req.body);
        const { title, author, content } = req.body;
        let newPost = new Post();
        newPost.title = title;
        newPost.author = author;
        newPost.content = content;
        */
        let newPost = new Post(req.body);
        newPost.id = uuid();
    
        postSaved = await newPost.save();
        res.status(200).json(postSaved);
    
        } catch(err) {
            res.status(500).json(err);
        }  
};

// get posts by range
exports.getPostsByRange = async (req, res) => {
    try {
        let { startAt, limit } = req.params;
    
        startAt = parseInt(startAt);
        limit = parseInt(limit);

        const posts = await Post.find().skip(startAt).limit(limit);
        const amount = await Post.countDocuments();

        res.status(200).json({
            posts,
            amount,
        });

        //res.status(200).json(await Post.find().skip(startAt).limit(limit));
  
    } catch(err) {
        res.status(500).json(err);
    }
};