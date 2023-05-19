const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const { BACK_END } = process.env;

const sendInfoMessage = async (bot, ctx, webAppUrl) => {
  const chatId = ctx.chat.id;

  const message = `Hello, this is a bot that has the following functionality: 
1) You can chat with the GPT chat, for this you just need to send a message in text format to the chat.
2) You can send your question to the GPT chat by voice, to do this, send a voice message to the chat through the microphone function in the telegram.
3) You can see the current exchange rate for the hryvnia, according to the official rate of Privatbank. To do this, you should visit the site.
4) You can see the weather forecast. To do this, you should visit the site.
5) You can see the list of goods that are currently in stock. To do this, you should visit the site.
6) You can create and manage the tasks that you need to do, only you will see your tasks, you will not be able to see other task users.`;

  const keyboard = {
    reply_markup: {
      keyboard: [
        ['Info', { text: 'Open site', web_app: { url: webAppUrl } }],
        ['Donate'],
      ],
      resize_keyboard: true,
    },
  };

  bot.telegram.sendMessage(chatId, message, keyboard);
};

const startWorkingWithBot = async (bot, ctx, webAppUrl) => {
  const userData = {
    token: ctx.telegram.token,
    username: ctx.from.username,
    first_name: ctx.from.first_name,
    language_code: ctx.from.language_code,
    id_chat: ctx.from.id,
  };

  try {
    const response = await axios.post(`${BACK_END}/api/register`, userData);
    sendInfoMessage(ctx);
  } catch (error) {
    error.response.status === 409
      ? sendInfoMessage(bot, ctx, webAppUrl) 
      : console.error;
  }
};

module.exports = startWorkingWithBot;