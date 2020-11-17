const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/commentsCtrl');

router.get('', commentsCtrl.getAllComments);
router.delete('/:id', commentsCtrl.deleteComment);
router.post('', commentsCtrl.createComment);
router.put('/:id', commentsCtrl.updateComment);

module.exports = router;