const express = require('express')
const router = express.Router()
const {
  getAllInterpreters,
  createInterpreter,
  getInterpreter,
  editInterpreter,
  deleteInterpreter
} = require('../controllers/interpreter')

router.get('/', getAllInterpreters)
router.post('/', createInterpreter)
router.get('/:id', getInterpreter)
router.put('/:id', editInterpreter)
router.delete('/:id', deleteInterpreter)

module.exports = router
