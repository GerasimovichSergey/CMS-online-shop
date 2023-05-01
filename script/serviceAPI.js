import { API_URL } from './const.js';

export const getGoods = async () => {
  const response = await fetch(`${API_URL}goods/?nopage=true`);

  if (response.ok) {
    return response.json();
  }

  throw new Error(response.statusText);
};

export const getCategory = async () => {
  const response = await fetch(`${API_URL}category`);

  if (response.ok) {
    return response.json();
  }

  throw new Error(response.statusText);
};