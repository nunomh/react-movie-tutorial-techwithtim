import '../css/Favorites.css';
import { useMovieContext } from '../contexts/MovieContext';
import MovieCard from '../components/MovieCard';

function Favorites() {
    const { favorites } = useMovieContext();

    if (favorites) {
        return (
            <div className="favorites-header">
                <h2>My Favorite Movies</h2>
                <div className="movies-grid">
                    {favorites.map(movie => (
                        // movie.title.toLowerCase().includes(searchQuery.toLowerCase()) && ( // filter movies based on search query example
                        <MovieCard movie={movie} key={movie.id} />
                        // )
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="favorites-empty">
            <h2>No Favorites Movies yet</h2>
            <p>Search for a movie and add it to your favorites</p>
        </div>
    );
}

export default Favorites;
