import React from 'react';

import './Footer.css';

function Footer(props) {
	return(
		<footer className="footer">
			<div className="container">
				<p>&copy; 2018 - <a className="has-text-primary has-text-weight-semibold" href="https://twitter.com/dantehemerson">Dante Calderón</a></p>
			</div>
		</footer>
	);
}


export default Footer;