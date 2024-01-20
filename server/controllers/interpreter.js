const Problem = require('api-problem')
const Interpreter = require('../models/Interpreter')

const getAllInterpreters = async (req, res) => {
  const interpreters = await Interpreter.find()
  res.status(200).json({ success: true, data: interpreters })
  res.status(200).json({ success: true })
}

const createInterpreter = async (req, res) => {
  const interpreter = await Interpreter.create(req.body)
  res.status(200).json({ success: true, data: interpreter })
  res.status(200).json({ success: true })
}

const getInterpreter = async (req, res) => {
  const { id: interpreterId } = req.params
  const interpreter = await Interpreter.findOne({ _id: interpreterId })
  if (!interpreter) {
    throw new Problem(404, `Not found: message with ID ${interpreterId}`)
  }
  res.status(200).json({ success: true, data: interpreter })
  res.status(200).json({ success: true })
}

const editInterpreter = async (req, res) => {
  const { id: interpreterId } = req.params
  const interpreter = await Interpreter.findOneAndUpdate({ _id: interpreterId }, req.body, { new: true, runValidators: true })
  if (!interpreter) {
    throw new Problem(404, `Not found: message with ID ${interpreterId}`)
  }
  res.status(200).json({ success: true, data: interpreter })
  res.status(200).json({ success: true })
}

const deleteInterpreter = async (req, res) => {
  const { id: interpreterId } = req.params
  const interpreter = await Interpreter.findOneAndDelete({ _id: interpreterId })
  if (!interpreter) {
    throw new Problem(404, `Not found: message with ID ${interpreterId}`)
  }
  res.status(200).json({ success: true, data: interpreter })
  res.status(200).json({ success: true })
}

module.exports = {
  getAllInterpreters,
  createInterpreter,
  getInterpreter,
  editInterpreter,
  deleteInterpreter
}
