const { Task } = require('../../models');

const updateTask = async (req, res, next) => {
    const { id } = req.body;
    console.log(req.body);
    console.log(id);
    const upTask = await Task.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json(upTask)
}

module.exports = updateTask;