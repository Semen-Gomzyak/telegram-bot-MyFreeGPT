const {Product} = require('../../models');

const getProducts = async (req, res) =>{
    const { page = 1, limit = 20, search, sort, id } = req.query;

    const query = {};

    if (search) {
        query.id = { $regex: search, $options: 'i' };
    }

    const sortOptions = {};

    switch (sort) {
        case 'newest':
            sortOptions.createdAt = -1;
            break;
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
            break;
    }

    const skip = (page - 1) * limit;

    let products;

    if (id) {
      products = await Product.findById(id);
    } else {
      products = await Product.find(query)
        .sort(sortOptions)
        .skip(skip)
        .limit(limit);
    }

    res.status(200).json(products);
}

module.exports = getProducts;