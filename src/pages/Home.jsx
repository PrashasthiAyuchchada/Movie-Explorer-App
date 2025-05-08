import { useEffect, useState } from 'react';
import { Grid as MuiGrid, Container, Typography, CircularProgress } from '@mui/material';
import MovieCard from '../components/MovieCard';
import tmdb from '../api/tmdb';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const res = await tmdb.get('/trending/movie/week');
        setMovies(res.data.results);
      } catch (err) {
        console.error('Failed to load trending movies:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrending();
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        🔥 Trending Movies
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : (
        <MuiGrid container spacing={2}>
          {movies.map((movie) => (
            <MuiGrid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
              <MovieCard movie={movie} />
            </MuiGrid>
          ))}
        </MuiGrid>
      )}
    </Container>
  );
};

export default Home;
