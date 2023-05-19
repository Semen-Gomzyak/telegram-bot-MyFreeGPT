const axios = require('axios');
const ffmpeg = require('fluent-ffmpeg');
const installer = require('@ffmpeg-installer/ffmpeg');
const { createWriteStream } = require('fs');
const { dirname, resolve } = require('path');
const  removeFile  = require('./utils.js');

const _dirname = dirname(require.main.filename);

class OggConverter {
  constructor() {
    ffmpeg.setFfmpegPath(installer.path);
  }

  toMp3(input, output) {
    try {
      const outputPath = resolve(dirname(input), `${output}.mp3`);
      return new Promise((resolve, reject) => {
        ffmpeg(input)
          .inputOption('-t 30')
          .output(outputPath)
          .on('end', () => {
            removeFile(input);
            resolve(outputPath);
          })
          .on('error', error => reject(error.message))
          .run();
      });
    } catch (error) {
      console.log('Error while creating mp3', e.message);
    }
  }

  async create(url, filename) {
    try {
      console.log(_dirname);
      const oggPath = resolve(_dirname, './tmp', `${filename}.ogg`);
      const response = await axios({
        method: 'get',
        url,
        responseType: 'stream',
      });
      return new Promise(resolve => {
        const stream = createWriteStream(oggPath);
        response.data.pipe(stream);
        stream.on('finish', () => resolve(oggPath));
      });
    } catch (error) {
      console.log('Error while creating ogg', error.message);
    }
  }
}
 
const ogg = new OggConverter();
module.exports = ogg; 