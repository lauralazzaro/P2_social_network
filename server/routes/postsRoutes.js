const express = require('express');
const router = express.Router();
const postsCtrl = require('../controllers/postsCtrl');
const commentsCtrl = require('../controllers/commentsCtrl');
const multer  =   require('../middleware/multer-config');

router.get('', postsCtrl.getAllPosts);
router.get('/:id', postsCtrl.getOnePost);
router.delete('/:id', postsCtrl.deletePost);
router.post('', multer, postsCtrl.createPost);
router.put('/:id', postsCtrl.updatePost);

router.get('/:id/comments', commentsCtrl.getAllComments);
router.delete('/:id/comments/:cmt', commentsCtrl.deleteComment);
router.post('/:id/comments', commentsCtrl.createComment);
router.put('/:id/comments/:cmt', commentsCtrl.updateComment);

module.exports = router;