const express = require('express');
const cors = require('cors');

const app = express();
//Enable cross-origin resource sharing
app.use(cors());

//Define route to retrive msg
app.get('/api/message', (req,res)=>{
    const data = {
        message:'This is custom meg from backend..'
    }
    res.json(data);
})
// define port no for server and start server

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})
