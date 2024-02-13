import axios from 'axios';
import { useEffect } from 'react';

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
    url: `movie/IdToReplace`,
  },
  movieCast: {
    url: `movie/IdToReplace/credits`,
  },
  movieReviews: {
    url: `movie/IdToReplace/reviews`,
    params: { page: '1' },
  },
};

export const fetchData = async (
  fetchParams , 
  //{controller}
) => {
  try {
      const response = await axios.request(
      fetchParams,
      //{signal: controller.signal},
      );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createPosterPath = poster_path => {
  return `https://image.tmdb.org/t/p/w500${poster_path}`;
};

export function FetchAndWriteState( movieId, fetchType, stateSetter) {
  const movieDetailsFetchParams = fetchParams[fetchType].url.replace(
    'IdToReplace',
    movieId
  );

  useEffect(() => {
    async function fetchMovie() {
      try {
        if (!movieDetailsFetchParams) {
          return;
        }
        const resp = await fetchData(movieDetailsFetchParams);
        stateSetter(resp);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovie();
  }, []);
}