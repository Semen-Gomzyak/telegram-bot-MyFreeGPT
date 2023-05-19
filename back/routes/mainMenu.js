const { Telegraf, session } = require('telegraf');
const dotenv = require('dotenv');
dotenv.config();

const { TELEGRAM_TOKEN } = process.env;
const {
  startWorkingWithBot,
  messageOpenAI,
  voiceMessageOpenAI,
} = require('../controllers');
const { tryCatchWrapper } = require('../middlwares');

const webAppUrl = 'https://tg-online-shop-fronend.vercel.app/';

const message = [];

const bot = new Telegraf(TELEGRAM_TOKEN);

bot.use(session());

bot.command('start', async ctx => {
  tryCatchWrapper(startWorkingWithBot(bot, ctx, webAppUrl));
});

bot.on('text', async ctx => {
  tryCatchWrapper(messageOpenAI(bot, ctx, message, webAppUrl));
});

bot.on('voice', async ctx => {
  tryCatchWrapper(voiceMessageOpenAI(bot, ctx, message));
});


module.exports = bot;
