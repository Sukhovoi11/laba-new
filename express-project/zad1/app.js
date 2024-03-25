const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;


app.use(bodyParser.urlencoded({ extended: false }));


let students = [];


app.use((req, res, next) => {
    console.log(`Request ${req.method} on path ${req.url} ${new Date()}`);
    next();
});


app.get('/home', (req, res) => {
    res.send('<title>HOME</title><body><p>HOME</p>');
});


app.get('/student', (req, res) => {
    res.send('<title>STUDENT</title><body><p>STUDENT</p>');
});


app.get('/add-student', (req, res) => {
    res.send('<title>ADD-STUDENT</title><body><p>ADD-STUDENT</p>');
});


app.post('/student', (req, res) => {
    const { name, surname, direction } = req.body;
    students.push({ name, surname, direction });
    res.send(`Hello, ${name} ${surname} on ${direction} studies!`);
});


app.get('/users', (req, res) => {
    let userList = '';
    students.forEach(student => {
        userList += `<p>${student.name} ${student.surname} - ${student.direction}</p>`;
    });
    res.send(userList);
});


app.delete('/users/delete/:id', (req, res) => {
    const id = req.params.id;
    students = students.filter(student => student.id !== id);
    res.send('Student deleted successfully.');
});


app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
app.get('/', (req, res) => {
    res.send('<title>HOME</title><body><p>HOME</p>');
});