const express = require('express');
const logger = require('morgan')
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const bot = require('./routes/mainMenu.js');

const app = express();
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

const websiteRouter = require('./routes/websiteRoutes.js')

app.use(logger(formatsLogger))
app.use(cors());
app.use(express.json());
app.use(express.static('public'))

app.use('/api', websiteRouter);

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

bot.launch();

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message });
});

module.exports = app;
