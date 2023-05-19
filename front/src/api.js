import axios from "axios";
const BACK_END_BASE_URL = process.env.REACT_APP_BACK_END;

export const getProducts = async () => {
  try {
    const response = await axios.get(`${BACK_END_BASE_URL}/products`);
    return response.data;
} catch (error) {
  console.log(error);
}
};

export const getProductById =  async (productId) => {
  try {
  const response = await axios.get(
    `${BACK_END_BASE_URL}/products?id=${productId}`
  );
    return response.data;
} catch (error) {
  console.log(error);
}
};

export const getExchange = async () => {
try {
  const response = await axios.get(`${BACK_END_BASE_URL}/exchange`);
    return response.data;
} catch (error) {
  console.log(error);
}
};

export const getWeather = async name => {
  try {
    const response = await axios.get(
      `${BACK_END_BASE_URL}/weather?city=${name}`
    );
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const addTask = async data => {
  try {
    const response = await axios.post(`${BACK_END_BASE_URL}/tasks`, data);
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const getTask = async (params) => {
  try {
    const response = await axios.get(`${BACK_END_BASE_URL}/tasks`, {
      params,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateTask = async data => {
  try {
    const response = await axios.put(`${BACK_END_BASE_URL}/tasks`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteTask = async id => {
  try {
    const response = await axios.delete(
      `${BACK_END_BASE_URL}/tasks?id=${id}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};