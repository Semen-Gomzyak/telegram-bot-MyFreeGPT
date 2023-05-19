const { Task } = require('../../models');

const deleteTask = async (req, res) => {
        const { id } = req.query;
        await Task.findByIdAndRemove(id);
        

    return res.status(200).json({ message: 'Task deleted' });

}

module.exports = deleteTask;