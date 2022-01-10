
const router = require('express').Router();

const { getAllThought, getThoughtById, createThought, updateThought, deleteThought, addReaction } = require('../../controllers/thought-controller');
// Set up GET all and POST at /api/thought
router
  .route('/')
  .get(getAllThought)
  .post(createThought);

  // Set up GET one, PUT, and DELETE at /api/thought/:id
router
.route('/:id')
.get(getThoughtById)
.put(updateThought)
.put(addReaction)
.delete(deleteThought);


  module.exports = router;