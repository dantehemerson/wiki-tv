import React, { Component } from 'react';

import ItemDiscover from '../ItemDiscover/ItemDiscover';

class Movies extends Component {

	render() {
		return(
			<div>
				<h3>Movies</h3>

				<div className="container">
					<div className="columns is-multiline is-centered">
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