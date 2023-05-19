import * as Yup from 'yup';

export const ProductSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name product is a required field')
    .min(2, 'Name must be at least 2 characters')
    .matches(/^[a-zA-Zа-яА-ЯіІїЇєЄёЁ\s]*$/, 'Please enter a valid name')
    .max(48, 'Name must not exceed 48 characters'),
  price: Yup.number().default(1).typeError('Price must be a number'),
  payment: Yup.string().required(),
  description: Yup.string()
    .min(10, 'Description must be at least 10 characters')
    .max(1000, 'Description must not exceed 1000 characters')
    .required(),
    characteristics: Yup.array().items(
        Yup.object({
            description: Yup.string().min(10, "Description must be at least 10 characters")
            .max(200, "Description must not exceed 200 characters")
      })
  )
});

module.exports = ProductSchema;