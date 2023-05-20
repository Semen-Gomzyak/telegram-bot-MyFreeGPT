const { updateCloudinaryAvatar } = require('../../middlwares');
const { Product } = require('../../models');

const addProduct = async (req, res) => {
      const { name, price, payment, description, characteristics } = req.body;
  const avatarURL = await updateCloudinaryAvatar(req, res);
  
      const savedProduct = await Product.create({
        name,
        price,
        payment,
        description,
        ...characteristics,
        image: avatarURL,
      });
      res.status(201).json(savedProduct);

};

module.exports = addProduct;
