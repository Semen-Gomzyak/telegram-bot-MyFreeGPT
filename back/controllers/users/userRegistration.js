const {User} = require('../../models');

const userRegistration = async (req, res, next) => {
    const { username, first_name, language_code, id_chat, token } = req.body;
    const storedUser = await User.findOne({ username });

    if (storedUser) {
        return 
    }

    const createdUser = await User.create({
        username,
        first_name,
        language_code,
        id_chat,
        token
    });

    res.status(201).json(createdUser);
}

module.exports = userRegistration;