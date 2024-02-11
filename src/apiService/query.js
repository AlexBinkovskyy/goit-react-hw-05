import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.method = 'GET';
axios.defaults.language = 'en-US';
axios.defaults.headers.accept = 'application/json';
axios.defaults.headers.Authorization =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2E3YjYyYTQ4MmZhYzIwMWU3OWI5YTFlY2IyMWViOSIsInN1YiI6IjY1YzY5Mjk1MjY2Nzc4MDE3YzU2ZjBkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yz8aIZIeNB3Z9T2KlKExdpR2fYzBqnb9uvUq4tNjAGQ';

export const fetchParams = {
  trending: {
    url: 'trending/movie/day',
  },
  movieSearch: {
    url: 'search/movie',
    params: { page: '1' },
  },
  movieDetails: {
    url: `movie/${1014590}`,
  },
  movieCast: {
    url: `movie/${1014590}/credits`,
  },
  movieReviews: {
    url: `movie/${1014590}/reviews`,
    params: { page: '1' },
  },
};

export const fetchData = async (fetchParams) => {
  try {
    const response = await axios
      .request(fetchParams);
      console.log(response.data);
      return response.data;
  } catch (error) {
    console.error(error);
  }
};

// const trending = {
//     url: 'trending/movie/day',
//   };

//   const movieSearch = {
//     url: 'search/movie',
//     params: { include_adult: 'false', page: '1' },
//   };

//   const movieDetails = {
//     url: 'movie/movie_id',
//   };

//   const movieCredits = {
//     url: 'movie/movie_id/credits',
//   };

//   const movieReviews = {
//     url: 'movie/movie_id/reviews',
//     params: { page: '1' },
//   };
