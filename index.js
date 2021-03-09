const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/karen', function (req, res) {
    res.send('Get me the Manager!')
  })
 
app.listen(3000)