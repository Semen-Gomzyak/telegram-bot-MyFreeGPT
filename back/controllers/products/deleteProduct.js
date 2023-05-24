const { Product } = require('../../models');

const deleteProduct = async (req, res) => {
  const { id } = req.query;
  await Product.findByIdAndRemove(id);

  return res.status(200).json({ message: 'Product deleted' });
};

module.exports = deleteProduct;
