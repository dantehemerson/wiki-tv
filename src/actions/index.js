import action from './action'

const HOST = 'https://api.themoviedb.org/3'

export const getDiscoverMovies = () => action('discover', HOST, 'discover/movie')