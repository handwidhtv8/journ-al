const express = require('express');
const router = express.Router();
const entrysCtrl = require('../controllers/entrys.js')

// routes go here
router.get('/', entrysCtrl.index)
router.get('/new', entrysCtrl.new)
router.delete('/:id', entrysCtrl.delete)
router.put('/:id/', entrysCtrl.update)
router.post('/', entrysCtrl.create)
router.get('/:id/edit', entrysCtrl.edit)
router.get('/:id', entrysCtrl.show)

module.exports = router;