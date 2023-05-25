const { Task, User } = require('../../models');

const getTasks = async (req, res) => {
  const {
    page = 1,
    limit = 20,
    search,
    sort,
    id,
    username,
    status,
    priority,
  } = req.query;

  const query = {};

  const checkOwnership = await User.findOne({ username });

  if (checkOwnership) {
    const ownerUserId = checkOwnership._id;

    query.owner = ownerUserId;

    if (search) {
      const searchValue = { $regex: search, $options: 'i' };
      query.$or = [
        { id: searchValue },
        { description: searchValue },
        { title: searchValue },
        { status: searchValue },
        { priority: searchValue },
      ];
    }

    if (status) {
      query.status = status;
    }

    if (priority) {
      query.priority = priority;
    }

    const sortOptions = {};

    switch (sort) {
      case 'oldest':
        sortOptions.createdAt = 1;
        break;
      case 'az':
        sortOptions.title = 1;
        break;
      case 'za':
        sortOptions.title = -1;
        break;
      default:
        sortOptions.createdAt = -1;
        break;
    }

    const skip = (page - 1) * limit;

    let tasks;

    if (id) {
      tasks = await Task.findById(id);
    } else {
      tasks = await Task.find(query)
        .sort(sortOptions)
        .collation({ locale: 'en' })
        .skip(skip)
        .limit(limit)
        .lean();
    }

    res.status(200).json(tasks);
  } else {
    res.status(403).json({ message: 'Access denied' });
  }
};

module.exports = getTasks;
