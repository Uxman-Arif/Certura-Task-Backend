const messageModel = require('../models/messagemodel');

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    socket.on('join', (userId) => {
      socket.join(userId);
    });

    socket.on('send_message', async (data) => {
        console.log('yes here')
      const { sender, reciever, content } = data;
      console.log(sender, reciever, content)

      const message = new messageModel({
        sender,
        reciever,
        message: content,
        timestamp: new Date(),
      });

      try {
        const savedMessage = await message.save();
        io.to(reciever).emit('receive_message', savedMessage);
      } catch (err) {
        console.error('Message save error:', err);
      }
    });
  });
};
