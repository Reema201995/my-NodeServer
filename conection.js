const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/myDB';

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.set('strictQuery', false);
mongoose.connect(uri, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
