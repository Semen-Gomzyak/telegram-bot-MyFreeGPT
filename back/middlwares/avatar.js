const multer = require('multer');
const Jimp = require('jimp');
const path = require('path');
const tempDir = path.join(__dirname, '../', 'temp');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, tempDir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({
  storage,
  limits: {
    fileSize: 280192,
  },
});

const avatarResize = async fileName => {
  const avatar = await Jimp.read(`${tempDir}/${fileName}`);
  avatar.resize(250, 250);

  return avatar;
};
module.exports = {
  upload,
  avatarResize,
};
