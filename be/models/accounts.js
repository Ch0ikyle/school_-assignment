const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
    email: { type: String, default: '', unique: true, index: true },
    password: { type: String, default: 1 },
    name: { type: String },
    age: { type: String}
})

const Account = mongoose.model('Account', accountSchema)

module.exports = Account
