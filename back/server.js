const app = require('./app.js');
const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config();

mongoose.set('strictQuery', false)

const { API_PORT, HOST_URI } = process.env;

async function main() {
  try {
    await mongoose.connect(HOST_URI);
    console.log('Database connection successful')

    app.listen(API_PORT, () => {
      console.log(`Server running. Use our API on port: ${API_PORT}`);
    });
  } catch (error) {
    console.error('main failed', error.message);
  }
}

main();
