import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;


const tmdb = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  
  export default tmdb;
