import React, { Component } from 'react';

import ItemDiscover from '../ItemDiscover/ItemDiscover';

import './Movies.css';

class Movies extends Component {

	render() {
		return(
			<div>
				

				<div className="container">
					<div className="columns is-multiline is-centered is-mobile column-items">
					<ItemDiscover/>
					<ItemDiscover/>
					<ItemDiscover/>
					<ItemDiscover/>
					<ItemDiscover/>
					<ItemDiscover/>
					<ItemDiscover/>
					<ItemDiscover/>
					<ItemDiscover/>
					<ItemDiscover/>
					</div>
				</div>
			</div>
		);
	}
}

export default Movies;