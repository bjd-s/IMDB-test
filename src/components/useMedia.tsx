import { useQuery } from 'react-query';
import axios from 'axios';
import { Movie, TvShow } from '../types';

export const useMedia = () => {
    const getTrendingData = async (): Promise<{movies: Movie[], tvShows: TvShow[]}> => {
        const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
        const baseUrl = `${import.meta.env.VITE_REACT_APP_API_URL}trending/all/day`;

        try {
            const response = await axios.get(baseUrl, {
                params: {
                    api_key: apiKey,
                }
            });

            // Vérifier que la réponse contient les données attendues
            if (!response.data || !response.data.results) {
                console.error('Réponse API invalide:', response.data);
                throw new Error('Structure de données API invalide');
            }

            const { results } = response.data;

            interface ResultItem extends Partial<Movie & TvShow> {}

            const movies = results.filter((item: ResultItem) => item.title);
            const tvShows = results.filter((item: ResultItem) => item.name);

            return { movies, tvShows };
        } catch (error) {
            console.error('Erreur lors de la récupération des données:', error);
            throw error;
        }
    }

    const { data, isLoading, error } = useQuery('trendingData', getTrendingData, {
        keepPreviousData: true,
        retry: 3, // Réessayer 3 fois en cas d'échec
        retryDelay: 1000, // Attendre 1 seconde entre les tentatives
    });

    return { data, isLoading, error };
};