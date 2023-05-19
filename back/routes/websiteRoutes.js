const express = require('express');
const { tryCatchWrapper, validateBody } = require('../middlwares');
const {
  getCurrentExchange,
  weatherForecast,
  userRegistration,
  addProduct,
  getProducts,
  addTask,
  getTasks,
  updateTask,
  deleteTask,
} = require('../controllers');
const { validateTask, validateProduct } = require('../validations');

const app = express.Router();

app.get('/exchange', tryCatchWrapper(getCurrentExchange));

app.get('/weather', tryCatchWrapper(weatherForecast));

app.post('/register', tryCatchWrapper(userRegistration));

app.post('/products', validateBody(validateProduct), tryCatchWrapper(addProduct));
app.get('/products', tryCatchWrapper(getProducts))

app.post('/tasks', validateBody(validateTask), tryCatchWrapper(addTask));
app.put('/tasks', validateBody(validateTask), tryCatchWrapper(updateTask));
app.get('/tasks', tryCatchWrapper(getTasks));
app.delete('/tasks', tryCatchWrapper(deleteTask));

module.exports = app;