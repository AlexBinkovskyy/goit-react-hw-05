import axios from 'axios';

const trending = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/trending/movie/day',
  params: {language: 'en-US'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2E3YjYyYTQ4MmZhYzIwMWU3OWI5YTFlY2IyMWViOSIsInN1YiI6IjY1YzY5Mjk1MjY2Nzc4MDE3YzU2ZjBkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yz8aIZIeNB3Z9T2KlKExdpR2fYzBqnb9uvUq4tNjAGQ'
  }
};

const movieSearch = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/search/movie',
  params: {include_adult: 'false', language: 'en-US', page: '1'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2E3YjYyYTQ4MmZhYzIwMWU3OWI5YTFlY2IyMWViOSIsInN1YiI6IjY1YzY5Mjk1MjY2Nzc4MDE3YzU2ZjBkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yz8aIZIeNB3Z9T2KlKExdpR2fYzBqnb9uvUq4tNjAGQ'
  }
};

const movieDetails = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/movie_id',
  params: {language: 'en-US'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2E3YjYyYTQ4MmZhYzIwMWU3OWI5YTFlY2IyMWViOSIsInN1YiI6IjY1YzY5Mjk1MjY2Nzc4MDE3YzU2ZjBkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yz8aIZIeNB3Z9T2KlKExdpR2fYzBqnb9uvUq4tNjAGQ'
  }
};

const movieCredits = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/movie_id/credits',
  params: {language: 'en-US'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2E3YjYyYTQ4MmZhYzIwMWU3OWI5YTFlY2IyMWViOSIsInN1YiI6IjY1YzY5Mjk1MjY2Nzc4MDE3YzU2ZjBkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yz8aIZIeNB3Z9T2KlKExdpR2fYzBqnb9uvUq4tNjAGQ'
  }
};

const movieReviews = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/movie_id/reviews',
  params: {language: 'en-US', page: '1'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2E3YjYyYTQ4MmZhYzIwMWU3OWI5YTFlY2IyMWViOSIsInN1YiI6IjY1YzY5Mjk1MjY2Nzc4MDE3YzU2ZjBkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yz8aIZIeNB3Z9T2KlKExdpR2fYzBqnb9uvUq4tNjAGQ'
  }
};


axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });