import axios from 'axios';

const API_KEY = 'YOUR_TMDB_API_KEY'; // 🔁 Replace with your real TMDb API key

const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
});

export default tmdb;
