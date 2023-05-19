const openai = require('../openai.js');

const messageOpenAI = async (bot, ctx, message, webAppUrl) => {
  const chatId = ctx.chat.id;

  if (ctx.message.text === 'Info') {
    return bot.telegram.sendMessage(
      chatId,
      `Hello, this is a bot that has the following functionality: 
1) You can chat with the GPT chat, for this you just need to send a message in text format to the chat.
2) You can send your question to the GPT chat by voice, to do this, send a voice message to the chat through the microphone function in the telegram.
3) You can see the current exchange rate for the hryvnia, according to the official rate of Privatbank. To do this, you should visit the site.
4) You can see the weather forecast. To do this, you should visit the site.
5) You can see the list of goods that are currently in stock. To do this, you should visit the site.
6) You can create and manage the tasks that you need to do, only you will see your tasks, you will not be able to see other task users.`
    );
  }

  if (ctx.message.text === 'Donate') {
    const keyboard = {
      reply_markup: {
        keyboard: [
          [
            { text: '400UAH', web_app: { url: `https://prt.mn/0F6Ui4tXuQ` } },
            { text: '800UAH', web_app: { url: `https://prt.mn/DKp-WOtD71` } },
          ],
          [
            { text: '1200UAH', web_app: { url: `https://prt.mn/HQFBOfEhD` } },
            { text: '1600UAH', web_app: { url: `https://prt.mn/hXzF0JZiN` } },
          ],
          [
            {
              text: '8000UAH',
              web_app: { url: `https://prt.mn/NnoHlFdl5a` },
            },
            {
              text: '20000UAH',
              web_app: { url: `https://prt.mn/Q30681JsKG` },
            },
          ],
          ['Main Menu'],
        ],
        resize_keyboard: true,
      },
    };

    return bot.telegram.sendMessage(chatId, 'Select a menu item:', keyboard);
  }

  if (ctx.message.text === 'Main Menu') {
    const keyboard = {
      reply_markup: {
        keyboard: [
          ['Info', { text: 'Open site', web_app: { url: webAppUrl } }],
          ['Donate'],
        ],
        resize_keyboard: true,
      },
    };

    return bot.telegram.sendMessage(
      chatId,
      'Select a menu item or send message or voice if you want to ask chat GPT',
      keyboard
    );
  }

  message.push({
    role: openai.roles.USER,
    content: ctx.message.text,
  });
  const response = await openai.chat(message);

  message.push({
    role: openai.roles.ASSISTANT,
    content: response.content,
  });

  await bot.telegram.sendMessage(chatId, response.content);
};

module.exports = messageOpenAI;
