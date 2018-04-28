import React from 'react';
import ReactDOM from 'react-dom';

// Estilos globales para toda la aplicacion
import './index.css';

import App from './components/App/App';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
