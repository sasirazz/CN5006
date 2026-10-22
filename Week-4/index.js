const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://sasirazz7_db_user:Knife123@cluster0.5fur1wx.mongodb.net/';
const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    gender: String,
    salary: Number
});

const Person = mongoose.model(
    'modelname',
    PersonSchema,
    'personCollection'
);
//function to insert one document
async function insertOne() {
const doc1 = new Person({
    name: 'Bikratn',
    age: 22,
    gender: 'Male',
    salary: 50000
});
const savedDoc = await doc1.save();
console.log('One document inserted');
console.log(savedDoc);
}

// calling the function
async function main() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Connected to ${MONGO_URI}');
        await insertOne();
    }
    catch (err) {
        cnsole.log('Error:',err);
    }
    finally{
        await mongoose.connection.close();
        console.log('Connection closed');
    }
}
main();

//function  to add multiple documents
async function insertMany() {
    const manyPersons = [
        {name: 'Alice',age: 30,gender: 'Female',salary: 60000},
        {name: 'Bob',age: 25,gender: 'Male',salary: 55000},
        {name: 'Sunny',age: 28,gender: 'Male',salary: 70000},
    ];
    const result = await Person.insertMany(manyPersons);
    console.log('Many documents inserted');
    console.log(result);
}
async function main() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Connected to ${MONGO_URI}');
        await insertMany();
    }
    catch (err) {
        console.log('Error:',err);
    }
    finally{
        await mongoose.connection.close();
        console.log('Connection closed');
    }

}
main();
// find all documents
async function findAll() {
    const docs = await Person.find({})
    .sort({salary:1}) // sort by salary
    .select({'namesalaryage'})
    .limit(100);
    console.log('Showing multiple documents');
    docs.forEach(doc => {
        console.log(doc.age,doc.name,doc.salary);
    });
}
await findAll();