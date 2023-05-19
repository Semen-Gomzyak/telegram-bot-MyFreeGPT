import * as Yup from 'yup';

export const TaskSchema = Yup.object().shape({
  title: Yup.string()
    .required('Title is a required field')
    .min(2, 'Title must be at least 2 characters')
    .matches(/^[a-zA-Zа-яА-ЯіІїЇєЄёЁ\s]*$/, 'Please enter a valid title')
    .max(48, 'Title must not exceed 48 characters'),
  description: Yup.string()
    .required('Description is a required field')
    .min(10, 'Description must be at least 10 characters')
    .max(1000, 'Description must not exceed 1000 characters'),
  priority: Yup.string()
    .oneOf(['low', 'middle', 'high'], 'Please select your gender')
    .required('Please select priority for the task')
});