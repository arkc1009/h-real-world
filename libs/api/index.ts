const BASE_API_URL = 'https://h-real-world-api.herokuapp.com/api';

const generateOption = (
  method: 'POST' | 'GET' | 'PUT' | 'DELETE',
  data = {},
  token: string
): RequestInit => {
  return {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token || ''}`,
    },
    body: JSON.stringify(data),
  };
};

export const postData = async (url: string, data = {}, token?: string) => {
  const response = await fetch(
    BASE_API_URL + url,
    generateOption('POST', data, token || '')
  );

  return response.json();
};
