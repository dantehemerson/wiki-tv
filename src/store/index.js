import {
	createStore,
	applyMiddleware,
} from 'redux'

import thunkMiddleware from 'redux-thunk'

import app from '../reducers'

export default createStore(
	app,
	applyMiddleware(
		thunkMiddleware
	)
)