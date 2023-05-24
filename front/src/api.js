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

export const addProduct = async data => {
  try {
    const formData = new FormData();
    formData.append('image', data.image); 
    formData.append('name', data.name); 
    formData.append('price', data.price); 
    formData.append('payment', data.payment); 
    formData.append('description', data.description); 
    formData.append('characteristics', data.characteristics);
    

    const response = await axios.post(
      `${BACK_END_BASE_URL}/products`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data', 
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
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
  console.log(data);
  try {
    const response = await axios.put(`${BACK_END_BASE_URL}/tasks`, data);
    console.log(response);
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