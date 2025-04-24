const messageModel = require('../models/messagemodel');

exports.getMessages = async (req, res) => {
  const currentUserId = req.user._id;
  const selectedUserId = req.params.userId;

  try {
    const existingMessages = await messageModel.find({
      $or: [
        { sender: currentUserId, reciever: selectedUserId },
        { sender: selectedUserId, reciever: currentUserId }
      ]
    });

    if (existingMessages.length === 0) {
      return res.json({ message: "No messages yet. Start the conversation!" });
    }

    const messages = await messageModel.find({
      $or: [
        { sender: currentUserId, reciever: selectedUserId },
        { sender: selectedUserId, reciever: currentUserId }
      ]
    }).sort({ timestamp: 1 });

    res.json(messages);
  } catch (error) {
    res.json({ error: "Failed to load messages" });
  }
};
