import * as Yup from 'yup';

export const ProductSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name product is a required field')
    .min(2, 'Name must be at least 2 characters')
    .max(48, 'Name must not exceed 48 characters'),
  price: Yup.number()
    .required('Price is a required field')
    .typeError('Price must be a number'),
  payment: Yup.string().required('Payment is a required field'),
  description: Yup.string()
    .min(10, 'Description must be at least 10 characters')
    .max(1000, 'Description must not exceed 1000 characters')
    .required('Description is a required field'),
});