import action from './action'

const HOST = 'https://api.themoviedb.org/3'

export const getMovies = (page = 363) => action('discover', HOST, 'discover/movie', {
	sort_by: 'popularity.desc',
	include_adult: false,
	include_video: false,
	page
})