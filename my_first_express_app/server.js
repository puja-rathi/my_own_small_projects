//require modules
const express = require("express");
const app = express();
const fs = require('fs');

// Middleware to serve static files from the "public" directory
app.use(express.static('public'));


// Read the person data from person.json
let person;
fs.readFile('person.json',(err,data)=>{
    if(err){
        console.log('Error reading person.json',err);
    }
    person = JSON.parse(data);
});


// Route to display welcome message
app.get('/',(req,res)=>{
    if(person){
        res.send(`Welcome,${person.name}!!`);
    }
    else{
        res.send('Welcome!!');
    }
    
})
// Route to serve about.html
app.get('/about',(req,res)=>{
    res.sendFile('about.html');
})

// Route to serve contact_us.html
app.get('/contact_us',(req,res)=>{
    res.sendFile('contact_us.html');
})

// 404 handler for unknown routes
app.get('*', function(req, res, next) {
    let err = new Error(`Sorry! Can't find that resource. Please check your URL.`);
    err.statusCode = 404;
    next(err);
  });

//create server
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
})