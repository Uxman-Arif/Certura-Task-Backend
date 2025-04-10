const express = require('express');
const blogrouter = require('./routes/blogroutes');

const app = express()
app.use('/', blogrouter)

app.listen(8000, ()=>{console.log('Server is started at PORT 8000...')});