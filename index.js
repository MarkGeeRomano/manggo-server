const express = require('express')
const mongoose = require('mongoose')
const Manggo = require('./models/Manggo')
const app = express()

app.use(require('cors')())

app.get('/', async (req, res) => {
  try {
    const { imgData } = await Manggo.random()
    res.send(imgData)
  } catch (err) {
    console.log(err)
    res.status(404).send('Error with Manggo!😿')
  }
})

const uri = process.env.DB_URI || 'mongodb://manggo:kawa11@ds241658.mlab.com:41658/manggo_db'
mongoose.connect(uri, { useNewUrlParser: true })

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`express listening on ${PORT}`))