const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware do parsowania danych z formularzy
app.use(bodyParser.urlencoded({ extended: false }));

// Tablica students przechowująca informacje o studentach
let students = [];

// Middleware do logowania informacji o żądaniach
app.use((req, res, next) => {
    console.log(`Request ${req.method} on path ${req.url} ${new Date()}`);
    next();
});

// Endpoint home
app.get('/home', (req, res) => {
    res.send('<title>HOME</title><body><p>HOME</p>');
});

// Endpoint student
app.get('/student', (req, res) => {
    res.send('<title>STUDENT</title><body><p>STUDENT</p>');
});

// Endpoint add-student
app.get('/add-student', (req, res) => {
    res.send('<title>ADD-STUDENT</title><body><p>ADD-STUDENT</p>');
});

// Endpoint POST dla dodawania nowych studentów
app.post('/student', (req, res) => {
    const { name, surname, direction } = req.body;
    students.push({ name, surname, direction });
    res.send(`Hello, ${name} ${surname} on ${direction} studies!`);
});

// Endpoint users zwracający listę studentów
app.get('/users', (req, res) => {
    let userList = '';
    students.forEach(student => {
        userList += `<p>${student.name} ${student.surname} - ${student.direction}</p>`;
    });
    res.send(userList);
});

// Endpoint DELETE dla usuwania studenta
app.delete('/users/delete/:id', (req, res) => {
    const id = req.params.id;
    students = students.filter(student => student.id !== id);
    res.send('Student deleted successfully.');
});

// Nasłuchiwanie na określonym porcie
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});