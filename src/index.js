import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// Estilos globales para toda la aplicacion
import './index.css';

import App from './components/App/App';
import Discover from './components/Discover/Discover';
import Movie from './components/Movie/Movie';



import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<BrowserRouter>
		<Route render={({ location }) => (
			<App>	
				<TransitionGroup>
					<CSSTransition key={location.key} timeout={500} classNames="fade">
						<Switch location={location}>
							<Route exact path="/" component={ Discover }/>
							<Route path="/movie/:id" component={ Movie }/>
						</Switch>
					</CSSTransition>
				</TransitionGroup>
			</App>
			)}
		/>
	</BrowserRouter>
	, document.getElementById('root'));
registerServiceWorker();
