const app = require('./server');
// the server would be running or listening on port 3001
app.listen(3001, () => {
    console.log(`server listening on ${3001}`);
})