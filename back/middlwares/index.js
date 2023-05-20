const tryCatchWrapper = require('./tryCatchWrapper');
const HttpError = require('./HttpError');
const validateBody = require('./validateBody');
const removePngOrJpgFromString = require('./removePngOrJpgFromString');
const upload = require('./avatar');
const avatarResize = require('./avatar');
const updateCloudinaryAvatar = require('./uploadMiddleware')

module.exports = {
  tryCatchWrapper,
  HttpError,
  validateBody,
  removePngOrJpgFromString,
  upload,
  avatarResize,
  updateCloudinaryAvatar,
};