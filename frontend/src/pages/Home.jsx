import MovieCard from '../components/MovieCard';

function Home() {
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
        event.preventDefault();
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for a movie..." className="search-input" />
                <button type="submit" className="search-button">
                    Search
                </button>
            </form>

            <div className="movies-grid">
                {movies.map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}

export default Home;
