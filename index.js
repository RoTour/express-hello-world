// hello world express app
const express = require('express')
const crypto = require('crypto')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api', (req, res) => {
  res.json({message: 'Hello World!', code: crypto.randomUUID()})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})