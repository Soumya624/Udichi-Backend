const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const signup = require('./routes/Signup/index');
const login = require('./routes/Login/index');
const user_info = require('./routes/User/index') 

app.use(bodyParser.json());
app.use(cors());

app.use('/signup', signup);
app.use('/login',login)
app.use('/user',user_info)



app.get('/', (req,res)=>{
    res.send('We are on Backend Server');
});

mongoose.connect('mongodb+srv://user1:hH0daYK4xW4qsDl9@cluster0.gco9idg.mongodb.net/?retryWrites=true&w=majority', ()=>{
    console.log('Connected to MongoDB');
})

app.listen(5000);