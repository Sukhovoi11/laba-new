const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));

let students = [];

app.get('/home', (req, res) => {
    res.send('<title>HOME</title><body><p>HOME</p></body>');
});

app.get('/student', (req, res) => {
    res.send('<title>STUDENT</title><body><p>STUDENT</p></body>');
});

app.get('/add-student', (req, res) => {
    res.send('<title>ADD-STUDENT</title><body><form action="/student" method="post"><input type="text" name="firstName" placeholder="First name"><br><input type="text" name="lastName" placeholder="Last name"><br><input type="text" name="major" placeholder="Major"><br><button type="submit">Submit</button></form></body>');
});

app.post('/student', (req, res) => {
    const { firstName, lastName, major } = req.body;
    students.push({ firstName, lastName, major });
    res.send(`Hello, ${firstName} ${lastName} on ${major} studies!`);
});

app.get('/users', (req, res) => {
    const userList = students.map(student => `<p>${student.firstName} ${student.lastName} - ${student.major}</p>`).join('');
    res.send(`<ul>${userList}</ul>`);
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});