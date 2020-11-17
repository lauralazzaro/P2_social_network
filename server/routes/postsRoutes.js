const express = require('express');
const router = express.Router();
const postsCtrl = require('../controllers/postsCtrl');

router.get('', postsCtrl.getAllPosts);
router.get('/:id', postsCtrl.getOnePost);
router.delete('/:id', postsCtrl.deletePost);
router.post('', postsCtrl.createPost);
router.put('/:id', postsCtrl.updatePost);

module.exports = router;