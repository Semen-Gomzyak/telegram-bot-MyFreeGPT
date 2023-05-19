const axios = require('axios');

const responseExchangeCourses = async coursid => {
  const response = await axios.get(
    `https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=${coursid}`
  );
  return response.data;
};

const getCurrentExchange = async (req, res) => {
  const courses = await Promise.all([
    responseExchangeCourses(5),
    responseExchangeCourses(4),
  ]);

  const resCourses =  await courses.flatMap(course => course);

  res.status(200).json( resCourses);
};

module.exports = getCurrentExchange;
