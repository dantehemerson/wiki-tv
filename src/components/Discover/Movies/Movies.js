import React, { Component } from 'react';

import ItemDiscover from '../ItemDiscover/ItemDiscover';

import './Movies.css';

class Movies extends Component {

	render() {
		console.log(this.props)
		return(
				<div>
					<div className="container">
						<div className="columns is-multiline is-centered is-mobile column-items">
							{
								this.props.movies.results && 
									this.props.movies.results.map((movie, index) => {	
										return(
											<ItemDiscover data={ movie } key={ index } />
										)
									})
									
								
							}
						</div>
					</div>
				</div>

		);
	}
}

export default Movies;