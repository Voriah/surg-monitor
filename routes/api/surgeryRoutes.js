const router = require('express').Router();
const surgeryController = require('../../controllers/surgeryController');

router.route('/')
  .get(surgeryController.findAll)
  .post(surgeryController.create);

router.route('/:id')
  .get(surgeryController.findById)
  .put(surgeryController.update)
  .delete(surgeryController.remove);

router.route('/findone/:id')
  .get(surgeryController.findOne);

// Export the router definitions
module.exports = router;
