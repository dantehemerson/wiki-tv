import React, { Component } from 'react';

import ItemDiscover from '../ItemDiscover/ItemDiscover';

import './Movies.css';

class Movies extends Component {
	constructor(...props) {
		super(...props);

		this.state = {
			movies: [],
			sortBy: 'popularity.desc',
			page: 1
		}
	}

	componentDidMount() {
		const key = '954c577b7ec500b5c660c0212e03029f';		
		
		fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=es&sort_by=${this.state.sortBy}&include_adult=false&include_video=false&page=${this.state.page}`)
		  .then(response => {
		    if (response.status !== 200) {
		      console.log('Error: ' + response.status);
		      return;
		    }

		    response.json().then(data => {
		      const movies = data.results;
		      this.setState({ movies });		      
		    });

		  })
		  .catch(err => {
		    console.log('Fetch Error :-S', err);
		  })
	}

	render() {
		return(
			<div>				
				<div className="container">
					<div className="columns is-multiline is-centered is-mobile column-items">
						{
							this.state.movies.map((movie, index) => {								
								return(
									<ItemDiscover data={ movie } key={ index } />
								);
							})
						}
					</div>
				</div>
			</div>
		);
	}
}

export default Movies;