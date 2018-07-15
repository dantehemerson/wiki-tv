import fetch from 'isomorphic-fetch'

const API_KEY = '954c577b7ec500b5c660c0212e03029f'
const HOST = 'https://api.themoviedb.org/3'
const IMAGES_HOST = 'http://image.tmdb.org/t/p'
const LANG = 'es'

export default function(page, path)  {
	return (dispatch) => {
		const url = `${HOST}/${path}?api_key=${API_KEY}&language=${LANG}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`		
		console.log("La url es : ", url)		
		// Acá se puede dispatchear
		return {
			movie1: {
				title: "Movie 1",
				year: 2018
			},
			movie1: {
				title: "Movie 1",
				year: 2018
			}
		}
	}
}