const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path');

const package = require('./package.json');
console.log(package.proxy)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname , 'build/index.html'))
})

app.use(express.static(path.join(__dirname , 'build')))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})