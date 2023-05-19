const { Product } = require('../../models');

const addProduct = async (req, res) => {
  const { name, price, image, description, characteristics, payment } =
    req.body;
  const newProduct = new Product({
    name,
    price,
    image,
    description,
    characteristics,
    payment
  });

  const savedProduct = await Product.create(newProduct);
  res.status(201).json(savedProduct);
};

module.exports = addProduct;
