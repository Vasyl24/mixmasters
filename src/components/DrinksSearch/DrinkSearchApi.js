import axios from 'axios';

const BASE_URL = 'https://mixmasters.onrender.com/api';

export async function fetchCategories() {
  const response = await axios.get(`${BASE_URL}/filters/categories`);
  return response.data;
}

export async function fetchIngerients() {
  const response = await axios.get(`${BASE_URL}/filters/ingredients`);
  return response.data;
}

export async function fetchDrinks({ params }) {
  const response = await axios.get(`${BASE_URL}/drinks/search`, {
    params: params,
  });

  return response.data;
}
