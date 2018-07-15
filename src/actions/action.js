import queryString from 'query-string'
import fetch from 'isomorphic-fetch'

const API_KEY = '954c577b7ec500b5c660c0212e03029f'
const IMAGES_HOST = 'http://image.tmdb.org/t/p'
const LANG = 'es'

export default function(type, host, path, params = {}, transform)  {
	return (dispatch) => {
		
		const url = `${host}/${path}?api_key=${API_KEY}&language=${LANG}&${(typeof params === 'string' ? params.substring(1) : queryString.stringify(params))}`		
		const getDataStart = () => ({
			type: `REQUEST/discover`
		})

		const getDataOk = payload => ({
			type: `OK/discover`,
			payload
		})

		const getError = error => ({
			type: `ERROR/discover`,
			error
		})
		
		const fetchDataWithRetry = delay => fetch(url)
			.then(response => {
				if(!response.ok) {
					dispatch(getError(response.status))
					if(response.status >= 400 && response.status < 500) {						
						throw new Error('Bad response from server')
					}			
				}
				return response.json()
			})
			.then(data => {
				// console.log(data)
				// console.log("Executing getDataOk()")
				// Los datos ser recibieron y se colocan en el store
				dispatch(getDataOk(data))
			})
			.catch(e => {
				console.log(e)				
			})

		dispatch(getDataStart())

		// Si es hay un error volverá a pedir los datos luego de n ms
		return fetchDataWithRetry(4000)			
	}
}