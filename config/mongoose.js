const mongoose = require('mongoose');
 mongoose.connect('mongodb+srv://anurag:anurag1107@cluster0.c8zi0vi.mongodb.net/Employeereviewsystem?retryWrites=true&w=majority');


// These set of line can be written in async await fashion, but I have followed the documentation. 

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open',  function(){
     console.log('Connected to Database :: MongoDB');
});

 
module.exports = db;  
