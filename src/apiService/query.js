import axios from 'axios';

const ACCESS_KEY = 'Client-ID HGbT0DpGTed59sCna-QTm2ht1TZGiEGD-Z7j2y5epBc';
axios.defaults.baseURL = 'https://api.unsplash.com/search/photos';

axios.defaults.headers.common['Authorization'] = ACCESS_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 16,
};

export const fetchQuery = async (queryString, page) => {
  const response = await axios.get(`?query=${queryString.split('/')[1]}&page=${page}`);
  console.log('залишилося запитів:', response.headers['x-ratelimit-remaining']);
  console.log(response.data);
  const { results, total, total_pages } = response.data;
  return { results, total, total_pages };
};
