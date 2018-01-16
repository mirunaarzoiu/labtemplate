var express = require('express');
var router = express.Router();
var animals = require('../service/').animals;

router.get('/', animals.list);
router.get('/:id', animals.findById);
router.post('/', animals.create);
router.delete('/:id', animals.delete);
router.put('/:id', animals.update);

module.exports = router;
