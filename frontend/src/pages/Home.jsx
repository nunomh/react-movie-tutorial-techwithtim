import MovieCard from '../components/MovieCard';
import { useState } from 'react';

function Home() {
    const [searchQuery, setSearchQuery] = useState('');

    const movies = [
        {
            id: 1,
            title: 'Movie 1',
            release_date: '2023-01-01',
        },
        {
            id: 2,
            title: 'Movie 2',
            release_date: '2023-02-01',
        },
        {
            id: 3,
            title: 'Movie 3',
            release_date: '2023-03-01',
        },
        {
            id: 4,
            title: 'Movie 4',
            release_date: '2023-04-01',
        },
        {
            id: 5,
            title: 'Movie 5',
            release_date: '2023-05-01',
        },
    ];

    const handleSearch = event => {
        event.preventDefault(); // Prevent the default form submission and page reload
        alert(`Searching for: ${searchQuery}`);
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

            <div className="movies-grid">
                {movies.map(movie => (
                    // movie.title.toLowerCase().includes(searchQuery.toLowerCase()) && ( // filter movies based on search query example
                    <MovieCard movie={movie} key={movie.id} />
                    // )
                ))}
            </div>
        </div>
    );
}

export default Home;
