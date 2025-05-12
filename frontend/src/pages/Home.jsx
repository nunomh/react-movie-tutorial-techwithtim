import MovieCard from '../components/MovieCard';
import { useState, useEffect } from 'react';
import { searchMovies, getPopularMovies } from '../services/api';
import '../css/Home.css';

function Home() {
    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (error) {
                console.error('Error fetching popular movies:', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        loadPopularMovies();
    }, []);

    const handleSearch = async event => {
        event.preventDefault(); // Prevent the default form submission and page reload

        if (!searchQuery.trim()) {
            return; // If the search query is empty, do nothing
        }
        if (loading) {
            return; // If already loading, do nothing
        }

        setLoading(true);

        try {
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError(null); // Clear any previous errors
        } catch (error) {
            console.error('Error searching movies:', error);
            setError(error);
        } finally {
            setLoading(false);
        }

        setSearchQuery('');
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for a movie..."
                    className="search-input"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">
                    Search
                </button>
            </form>

            {loading ? (
                <p className="loading">Loading...</p>
            ) : (
                <div className="movies-grid">
                    {movies.map(movie => (
                        // movie.title.toLowerCase().includes(searchQuery.toLowerCase()) && ( // filter movies based on search query example
                        <MovieCard movie={movie} key={movie.id} />
                        // )
                    ))}
                </div>
            )}

            {error && <p className="error-message">Error: {error.message}</p>}
        </div>
    );
}

export default Home;
