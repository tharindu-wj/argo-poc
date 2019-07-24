const express = require('express')
const router = express.Router()

//  Getting All
router.get('/', async (req, res) => {
  try {
    res.json({ message: 'users route' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router
