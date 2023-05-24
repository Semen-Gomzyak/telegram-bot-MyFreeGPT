const startWorkingWithBot = require('./telegramButton/startWorkingWithBot');
const sendInfoMessage = require('./telegramButton/startWorkingWithBot');
const messageOpenAI = require('./openAI/messageOpenAI');
const voiceMessageOpenAI = require('./openAI/voiceOpenAI');
const weatherForecast = require('./weather/weather');
const getCurrentExchange = require('./exchange/getCurrentExchange');
const userRegistration = require('./users/userRegistration');
const getProducts = require('./products/getProducts');
const addProduct = require('./products/addProduct');
const addTask = require('./tasks/addTask');
const getTasks = require('./tasks/getTasks');
const updateTask = require('./tasks/updateTask');
const deleteTask = require('./tasks/deleteTask');
const deleteProduct = require('./products/deleteProduct')

module.exports = {
  startWorkingWithBot,
  messageOpenAI,
  voiceMessageOpenAI,
  weatherForecast,
  getCurrentExchange,
  userRegistration,
  getProducts,
  addProduct,
  addTask,
  getTasks,
  updateTask,
  deleteTask,
  sendInfoMessage,
  deleteProduct,
};
