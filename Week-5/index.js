const express = require('express'); 
const fs= require('fs') 
const app = express(); 
// Built-in middleware for parsing form data and JSON 
app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 
// Home route 
app.get('/', (req, res) => { res.send('Hello! This is my first Express application.'); }); 
app.get('/home', (req, res) => { res.send('Hello! Welcome to my application.'); }); 
app.get('/about', function (req, res) { res.send('This is a basic Express application'); }); 
app.get('/users/:userId/books/:bookId', function (req, res) { res.send(req.params); });
// Start server 
const PORT = 5000; 
app.listen(PORT, () => { 
console.log(`Server is running on port ${PORT}`); 
}); 

// to read json file
app.get('/GetStudents', (req, res) => { 
    fs.readFile('./Students.json', 'utf8', (err, data) => { 
 
        if (err) { 
            return res.status(500).json({ 
                status: false, 
                statusCode: 500, 
                message: 'Error reading Students.json' 
            }); 
        } 
 
        res.status(200).json({ 
            status: true, 
            statusCode: 200, 
            requestedAt: new Date().toISOString(), 
            requestUrl: req.originalUrl, 
            requestMethod: req.method, 
            studentData: JSON.parse(data) 
        }); 
    }); 
});

app.get('/GetStudent/:id', (req, res) => { 
 
    console.log("GetStudent called"); 
 
    fs.readFile(__dirname + "/Students.json", "utf8", (err, data) => { 
 
        if (err) { 
            return res.status(500).json({ 
                status: false, 
                statusCode: 500,
                 message: "Error reading Students.json" 
                 
            }); 
        } 
 
        const students = JSON.parse(data); 
        const student = students["Student" + req.params.id]; 
 
        console.log(student); 
 
        if (student) { 
            res.status(200).json(student); 
        } else { 
            res.status(404).json({ 
                status: false, 
                statusCode: 404, 
                message: "Student Not Found", 
                requestedAt: new Date().toISOString(), 
                requestUrl: req.originalUrl, 
                requestMethod: req.method 
            }); 
        } 
    }); 
}); 

// To show html form
app.get('/studentinfo', (req, res) => { 
res.sendFile('StudentInfo.html', { root: __dirname }); 
}); 
app.post('/submit-data', (req, res) => { 
const name = req.body.firstName + ' ' + req.body.lastName; 
const age = req.body.myAge  
const Gender = ' Gender: ' + req.body.gender; 
const qual = 'Qualification: ' + req.body.Qual; 
console.log(req.body.Qual); 
res.send({ 
status: true, 
message: 'Form Details', 
data: { 
name: name, 
age: age, 
gender: Gender, 
qualification: qual 
} 
}); 
});
// to connect with mongodb
const mongoose = require('mongoose'); 
const { 
insertOne, 
findAll, 
countDocuments, 
findFemalesOver30, 
deleteManyPersons, 
updateManyPersons 
} = require('./Week4Lab'); 
const MONGO_URI = 
'mongodb+srv://nhqbrunellabtop_db_user:Hhqazi2906@cluster0.tqdie1c.mongodb.net/E
mployee'; 
mongoose.connect(MONGO_URI) 
.then(() => console.log('Connected to MongoDB')) 
.catch(err => console.log(err));