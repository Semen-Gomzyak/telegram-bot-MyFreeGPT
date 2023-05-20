const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      default: null,
    },
    payment: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    characteristics: [
      {
        description: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Product = mongoose.model('product', productSchema);

module.exports = Product;
