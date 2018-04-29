import React from 'react';
import ReactDOM from 'react-dom';

// Estilos globales para toda la aplicacion
import './index.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App/App';
import Discover from './components/Discover/Discover';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<BrowserRouter>
		<App>	
			<Switch>
				<Route exact path="/" component={ Discover }/>
			</Switch>
		</App>

	</BrowserRouter>
	, document.getElementById('root'));
registerServiceWorker();
