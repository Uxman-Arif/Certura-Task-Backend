const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const blogrouter = require('./routes/blogroutes');
const userrouter = require('./routes/userroutes');

mongoose.connect('mongodb://127.0.0.1:27017/CerturaTask');
const app = express();
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cors());
app.use('/', blogrouter);
app.use('/users', userrouter);

app.listen(8000, ()=>{console.log('Server is started at PORT 8000...')});