import fetch from 'isomorphic-fetch'

const API_KEY = '954c577b7ec500b5c660c0212e03029f'
const HOST = 'https://api.themoviedb.org/3'
const IMAGES_HOST = 'http://image.tmdb.org/t/p'
const LANG = 'es'

export default function(page, path)  {
	return (dispatch) => {

		const url = `${HOST}/${path}?api_key=${API_KEY}&language=${LANG}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`				
		
		const fetchDataWithRetry = delay => fetch(url)
			.then(response => {
				if(!response.ok) {
					if(response.status >= 400 && response.status < 500) {						
						throw new Error('Bad response from server')
					}			
				}
				return response.json()
			})
			.then(data => {
				console.log(data)
			})
			.catch(e => {
				console.log(e)				
			})

		// Si es hay un error volverá a pedir los datos luego de n ms
		return fetchDataWithRetry(4000)			
	}
}