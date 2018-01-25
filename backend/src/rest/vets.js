var express = require('express');
var router = express.Router();
var vets = require('../service/').vets;

router.get('/', vets.list);
router.get('/:id', vets.findById);
router.post('/', vets.create);
router.delete('/:id', vets.delete);
router.put('/:id', vets.update);


module.exports = router;
