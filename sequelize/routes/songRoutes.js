const express = require('express');
const router = express.Router();
const songController = require('../controllers/songController');

router.get('/index', songController.index);
router.post('/store', songController.store);
router.put('/update/:id', songController.update);
router.delete('/delete/:id', songController.delete);

module.exports = router;
