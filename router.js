const users = require('./controller.js');
module.exports = (router) => {
    // this route will we used make the API call to the server 
    router.get('/getUsers', users.findAll)
}