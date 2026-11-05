const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://sasirazz7_db_user:Knife123@cluster0.5fur1wx.mongodb.net/';
const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    gender: String,
    salary: Number,
    city: String
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
    salary: 50000,
    city: 'Glasgow'
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
        {name: 'Alice',age: 30,gender: 'Female',salary: 60000,city:'ktm'},
        {name: 'Bob',age: 25,gender: 'Male',salary: 55000,city:'London'},
        {name: 'Sunny',age: 28,gender: 'Male',salary: 70000,city:'manchester'},
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
        await findAll();
        await findFemalesOver30()  
        await countDocuments() 
        await deleteManyPersons()
        await updateManyPersons()  
        await findOne()
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
      .select('name salary age') 
    .limit(100);
    console.log('Showing multiple documents');
    docs.forEach(doc => {
        console.log(doc.age,doc.name,doc.salary);
    });
}
// Find females with age >= 30 
async function findFemalesOver30() { 
 
    const givenAge = 30; 
 
    const docs = await Person.find({ 
        gender: 'Female', 
        age: { $gte: givenAge } 
    }) 
    .sort({ salary: 1 }) 
    .select('name salary age') 
    .limit(10); 
 
    console.log(`Females aged ${givenAge} or above:`); 
 
    docs.forEach(doc => { 
        console.log(doc.age, doc.name, doc.salary); 
    }); 
} 

// Count all documents 
async function countDocuments() { 
const count = await Person.countDocuments(); 
console.log("Total Documents Count:", count); 
} 

// Delete all documents where age >= 25 
async function deleteManyPersons() { 
const result = await Person.deleteMany({ 
age: { $gte: 45 } 
}); 
console.log("Deleted documents:", result); 
}
// Update all females' salary to 5555 
async function updateManyPersons() { 
const result = await Person.updateMany( 
{ gender: "Female" }, 
{ salary: 5555 } 
); 
console.log("Update successful"); 
console.log(result); 
}
//query to display only the person from a specific city
async function findOne(){
     const docs = await Person.find({city:'ktm'})
     // sort by specific city
      .select('name salary age city') 
    .limit(100);
    console.log('Showing person with specific city');
    docs.forEach(doc => {
        console.log(doc.age,doc.name,doc.salary,doc.city);
    });
}