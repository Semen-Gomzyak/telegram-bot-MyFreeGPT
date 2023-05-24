const {User} = require('../../models');

const userRegistration = async (req, res, next) => {
    const { username, first_name, language_code, id_chat, token } = req.body;
    console.log(username);
    const storedUser = await User.findOne({ username });
    console.log(storedUser);

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