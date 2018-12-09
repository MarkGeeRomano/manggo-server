const mongoose = require('mongoose')
const { Schema } = mongoose

const ManggoSchema = new Schema({
  imgData: Buffer,
  createdAt: { type: Date, default: Date.now }
})

ManggoSchema.statics.random = async function() {
  try {
    const collectionLength = await this.countDocuments({})
    const randomIndex = Math.floor(Math.random() * collectionLength)
    const doc = await this.findOne().skip(randomIndex)

    return doc
  } catch (e) {
    console.log(e)
  }
}

module.exports = mongoose.model('Manggo', ManggoSchema)