const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const  router = require('./routes/ecomroutes');
const blogrouter = require('./routes/blogroutes');
const userrouter = require('./routes/userroutes');
const {verifyToken} = require('./middlewares/userverify');

mongoose.connect('mongodb://127.0.0.1:27017/CerturaTask');
const app = express();
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cors());
app.use('/blog', verifyToken, blogrouter);
app.use('/users', userrouter);
app.use('/', verifyToken, router);
app.get('/api/profile', verifyToken, (req, res) => {
    res.json({ msg: 'authorized', user: req.user });
  });

app.listen(8000, ()=>{console.log('Server is started at PORT 8000...')});