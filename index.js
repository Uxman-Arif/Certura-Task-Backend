const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const http = require('http');
const { Server } = require('socket.io');

const router = require('./routes/ecomroutes');
const blogrouter = require('./routes/blogroutes');
const userrouter = require('./routes/userroutes');
const { verifyToken } = require('./middlewares/userverify');
const socketHandler = require('./sockets/sockethandler');
const chatrouter = require('./routes/chatroutes');


mongoose.connect('mongodb://127.0.0.1:27017/CerturaTask');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173', // frontend URL
    methods: ['GET', 'POST']
  }
});

socketHandler(io); // ✅ Use modular socket logic here

app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cors());

app.use('/api', verifyToken, chatrouter);
app.use('/blog', verifyToken, blogrouter);
app.use('/users', userrouter);
app.use('/', verifyToken, router);

app.get('/api/profile', verifyToken, (req, res) => {
  res.json({ msg: 'authorized', user: req.user });
});

server.listen(8000, () => {
  console.log('Server is started at PORT 8000...');
});
