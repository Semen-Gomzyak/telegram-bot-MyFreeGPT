const { Telegraf, session } = require('telegraf');
const dotenv = require('dotenv');
dotenv.config();

const { TELEGRAM_TOKEN, FRONT_END } = process.env;
const {
  startWorkingWithBot,
  messageOpenAI,
  voiceMessageOpenAI,
} = require('../controllers');
const { tryCatchWrapper } = require('../middlwares');

const message = [];

const bot = new Telegraf(TELEGRAM_TOKEN);

bot.use(session());

bot.command('start', async ctx => {
  tryCatchWrapper(startWorkingWithBot(bot, ctx, FRONT_END));
});

bot.on('text', async ctx => {
  tryCatchWrapper(messageOpenAI(bot, ctx, message, FRONT_END));
});

bot.on('voice', async ctx => {
  tryCatchWrapper(voiceMessageOpenAI(bot, ctx, message));
});


module.exports = bot;
