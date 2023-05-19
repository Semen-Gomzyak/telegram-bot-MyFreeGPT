const { Task, User } = require('../../models');

const addTask = async (req, res) => {
  const { username, title, description, expired_at, priority } = req.body;
  console.log(req.body);

  const storedUser = await User.findOne({ username });

  if (!storedUser) {
    return res.status(409).json("User not found, please try again later");
  }

  const task = {
    title,
    description,
    expired_at,
    priority,
  };

  const savedTask = await Task.create({ ...task, owner: { _id: storedUser._id } });

  res.status(201).json(savedTask);
}

module.exports = addTask;