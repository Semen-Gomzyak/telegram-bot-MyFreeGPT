const ogg = require('../ogg');
const openai = require('../openai.js');

const voiceMessageOpenAI = async (bot, ctx, message) => {
  const chatId = ctx.chat.id;

    const link = await ctx.telegram.getFileLink(ctx.message.voice.file_id);
    const userId = String(ctx.message.from.id);
    const oggPath = await ogg.create(link.href, userId);
    const mp3Path = await ogg.toMp3(oggPath, userId);

    const text = await openai.transcription(mp3Path);

    message.push({ role: openai.roles.USER, content: text });
    const response = await openai.chat(message);

    message.push({
      role: openai.roles.ASSISTANT,
      content: response.content,
    });
    await bot.telegram.sendMessage(chatId, response.content);
};

module.exports = voiceMessageOpenAI;
