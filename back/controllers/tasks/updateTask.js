const { Task } = require('../../models');

const updateTask = async (req, res, next) => {
    const { id } = req.body;
    const upTask = await Task.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json(upTask)
}

module.exports = updateTask;