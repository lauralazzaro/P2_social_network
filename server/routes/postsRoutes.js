const express = require('express');
const router = express.Router();
const postsCtrl = require('../controllers/postsCtrl');
const commentsCtrl = require('../controllers/commentsCtrl');
const multer  =   require('../middleware/multer-config');
const auth = require('../middleware/auth');

router.get('',  auth, postsCtrl.getAllPosts);
router.get('/:id', auth,postsCtrl.getOnePost);
router.delete('/:id', auth, postsCtrl.deletePost);
router.post('', auth, multer, postsCtrl.createPost);
router.put('/:id', auth, multer, postsCtrl.updatePost);

router.get('/:id/comments', auth, commentsCtrl.getAllComments);
router.get('/getOneComment/:id', auth, commentsCtrl.getOneComment);
router.delete('/deleteComment/:id', auth, commentsCtrl.deleteComment);
router.post('/createComment', auth, multer, commentsCtrl.createComment);
router.put('/modifyComment/:id', auth, multer, commentsCtrl.updateComment);

module.exports = router;