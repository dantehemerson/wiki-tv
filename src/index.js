import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'

// Estilos globales para toda la aplicacion
import './index.css';

import App from './components/App/App';
import Discover from './components/Discover/Discover';
import Movie from './components/Movie/Movie';

import store from './store'
import { getMovies } from './actions'
import registerServiceWorker from './registerServiceWorker';

store.dispatch(getMovies())

ReactDOM.render(
	<Provider store={store}>
		<HashRouter>
			<Route render={({ location }) => (
				<App>					
					<Switch location={location}>
						<Route exact path='/' component={ Discover }/>
						<Route path='/movie/:id' component={ Movie }/>
					</Switch>				
				</App>
				)}
			/>
		</HashRouter>
	</Provider>
	, document.getElementById('root')
);

(function() {
	/** Mi pagina web actualmente no es https, por lo cual no funcionara 
	 	Los service workers. So, lo ejecutare solo cuando este en localhost(la verdad aun no utilizo serviceworkers, pero detodas maneras lo dejare asi).
	 	Cuando no este en localhost entonces no ejecuta el serviceworker

	*/ 	

	if(Boolean(
	  window.location.hostname === 'localhost' ||
	    // [::1] is the IPv6 localhost address.
	    window.location.hostname === '[::1]' ||
	    // 127.0.0.1/8 is considered localhost for IPv4.
	    window.location.hostname.match(
	      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
	    )
	)) {
		console.log('Registrando Service Worker');
		registerServiceWorker();
	}
	else {
		//console.log('No se registro Service Worker, y no hay problema.');
	}
	
})();

