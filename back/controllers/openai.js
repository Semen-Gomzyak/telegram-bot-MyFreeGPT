const { Configuration, OpenAIApi } = require('openai');
const dotenv = require('dotenv');
const { createReadStream } = require('fs');
dotenv.config();

const { OPENAI_KEY } = process.env;

class OpenAI {
  roles = {
    ASSISTANT: 'assistant',
    USER: 'user',
    SYSTEM: 'system',
  };
  constructor(apiKey) {
    const configuration = new Configuration({
      apiKey,
    });
    this.openai = new OpenAIApi(configuration);
  }

  async chat(messages) {
    try {
      const response = await this.openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages,
      });

      return response.data.choices[0].message;
    } catch (error) {
      console.log('Error while gpt chat', error.message);
    }
  }

  async transcription(filepath) {
    try {
      const response = await this.openai.createTranscription(
        createReadStream(filepath),
        'whisper-1'
      );

      return response.data.text;
    } catch (error) {
      console.log('Error while transcription', error.message);
    }
  }
}

const openai = new OpenAI(OPENAI_KEY);
module.exports = openai; 
