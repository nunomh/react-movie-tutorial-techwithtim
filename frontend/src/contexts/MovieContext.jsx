import { createContext, useContext, useState, useEffect } from 'react';

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    // children is the prop that will be passed to the provider component, in this case the App component
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const addToFavorites = movie => {
        setFavorites(prevFavorites => [...prevFavorites, movie]);
    };

    const removeFromFavorites = movieId => {
        setFavorites(prevFavorites => prevFavorites.filter(movie => movie.id !== movieId));
    };

    const isFavorite = movieId => {
        return favorites.some(movie => movie.id === movieId);
    };

    return (
        <MovieContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}>
            {children}
        </MovieContext.Provider>
    );
};
