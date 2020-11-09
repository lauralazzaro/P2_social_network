const express = require('express');
const router = express.Router();
const postsCtrl = require('../controllers/postsCtrl');

router.get('', postsCtrl.getAllPosts);
router.get('/:id', postsCtrl.getOnePost);
router.delete('/:id', postsCtrl.deletePost);

module.exports = router;