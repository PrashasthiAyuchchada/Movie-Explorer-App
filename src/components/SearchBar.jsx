import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ search, setSearch, onSearch }) => {
  return (
    <TextField
      fullWidth
      label="Search Movies"
      variant="outlined"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      onKeyPress={(e) => e.key === 'Enter' && onSearch()}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={onSearch}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        )
      }}
      sx={{ my: 2 }}
    />
  );
};

export default SearchBar;
