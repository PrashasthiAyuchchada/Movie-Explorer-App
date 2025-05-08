import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <Card sx={{ width: '100%', height: '100%' }}>
      <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <CardMedia
          component="img"
          height="300"
          image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
        />
        <CardContent>
          <Typography variant="subtitle1" noWrap>
            {movie.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movie.release_date?.split('-')[0]} | ⭐ {movie.vote_average}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default MovieCard;
