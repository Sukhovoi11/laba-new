const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


app.use((req, res, next) => {
    console.log(`Request ${req.method} on path ${req.url} ${new Date()}`);
    next();
});

let students = [];



app.listen(5000, () => {
    console.log('Server is running on port 5000');
});