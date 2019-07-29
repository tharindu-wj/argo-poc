const express = require('express')
const fs = require('fs')
const router = express.Router()

// post
router.post('/', async (req, res) => {
  try {
    const projectName = req.body.project.name
    console.log(projectName)
    //console.log(req)
    fs.appendFile('message.txt', `${projectName} `, (err) => {
      if (err) throw err;
      console.log('The "data to append" was appended to file!');
    });
    res.json({ message: 'jira route' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


//  Getting All
router.get('/', async (req, res) => {
  try {
    //console.log(req)
    fs.appendFile('message.txt', 'data to append', (err) => {
      if (err) throw err;
      console.log('The "data to append" was appended to file!');
    });
    res.json({ message: 'jira route' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router
