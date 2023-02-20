const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    Designation: String,
    Email: String,
    Id: String,
    Name: String
}, {
    timestamps: true
});

module.exports = mongoose.model('employees', userSchema);