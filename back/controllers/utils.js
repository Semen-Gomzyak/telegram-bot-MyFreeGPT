const { unlink } = require('fs').promises;

async function removeFile(path) {
  try {
    await unlink(path);
  } catch (error) {
    console.log('Error while removing file', error.message);
  }
}

module.exports = removeFile;
