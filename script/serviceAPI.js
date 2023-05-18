import { API_URL } from './const.js';

export const getGoods = async (id) => {
  const response = await fetch(`${API_URL}api/goods/${id ? id : '?nopage=true'}`);

  if (response.ok) {
    return response.json();
  }

  throw new Error(response.statusText);
};

export const postGoods = async (data) => {
  const response = await fetch(`${API_URL}api/goods`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    return response.json();
  }

  const parsResp = await response.json();

  throw new Error(`Error in field: ${parsResp.errors[0].field}. Error text: ${parsResp.errors[0].message}`);
};

export const getCategory = async () => {
  const response = await fetch(`${API_URL}api/category`);

  if (response.ok) {
    return response.json();
  }

  throw new Error(response.statusText);
};