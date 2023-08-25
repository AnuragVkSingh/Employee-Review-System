const mongoose = require('mongoose');
 mongoose.connect('mongodb+srv://anuragvsingh76:Anurag123@cluster0.5acjvnm.mongodb.net/?retryWrites=true&w=majority');


// These set of line can be written in async await fashion, but I have followed the documentation. 

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open',  function(){
     console.log('Connected to Database :: MongoDB');
});

 
module.exports = db;  
