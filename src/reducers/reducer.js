/** Este es un creador de reducers, crea un campo y su reducer con el @param type  **/
export default (type, initialData) => (
	state = {
		loading: true, 
		data: initialData || []
	}, action) => {
	switch(action.type) {
		case `REQUEST/${type}`: // Los datos se estan cargando
			return {
				...state,
				loading: true
			}
		case `OK/${type}`: // Los datos ser recibieron
			return {
				...state,
				loading: false,
				data: action.payload,
				error: false
			}
		case `ERROR/${type}`: // Ha ocurrido un error
			return {
				...state,
				error: true,
			}
		case `QUERY/${type}`:
			return {
				...state,
				query: action.query
			}		
		default: 
			return state
	}
}