const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: { type: String, default: '', unique: true, index: true },
    password: { type: Number, default: 1 }
})

const User = mongoose.model('User', userSchema)

module.exports = User
