const User = require('./model.js');

module.exports = {
    // This will search for all the users in the database
    findAll(req, res) {
        User.find()
        .then((users) => {
            const _users = [];
            users.forEach((user) => {
                let _user = new User({
                    Designation: user.Designation || "Unknown Designation",
                    Email: user.Email || "No Email",
                    Id: user.Id || "Unknown Id", 
                    Name: user.Name  
                });
                _users.push(_user);
            });
            return res.status(200).send({
                users: _users
            });
        }).catch(err => {
            return res.status(500).send({
                message: err.message || "Some error occurred while retrieving records."
            });
        });
    }
};