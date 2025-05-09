// Ensure environment variables are loaded correctly
const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

// Check if the environment variables are defined
if (!API_KEY || !API_URL) {
    throw new Error('API_KEY and API_URL must be defined in .env file');
}

export const getPopularMovies = async () => {
    try {
        const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching popular movies:', error);
        throw error;
    }
};

export const searchMovies = async query => {
    try {
        const response = await fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error searching movies:', error);
        throw error;
    }
};
