import React, { Component } from 'react';

import ItemDiscover from '../ItemDiscover/ItemDiscover';

import './Movies.css';

class Movies extends Component {
	constructor(...props) {
		super(...props);

		this.state = {
			movies: []
		}
	}

	componentDidMount() {
		const key = '954c577b7ec500b5c660c0212e03029f';

		// Get a date range between today and one month ago to dynamically update the link for the request
		let todayDate = new Date();
		let today = todayDate.getFullYear() + '-' + (todayDate.getMonth() + 1) + '-' + todayDate.getDate();
		let oneMonthAgo = (todayDate.getMonth() === 0 ? todayDate.getFullYear() - 1 : todayDate.getFullYear()) + '-' + (todayDate.getMonth() === 0 ? todayDate.getMonth() + 12 : todayDate.getMonth()) + '-' + todayDate.getDate();

		fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=${oneMonthAgo}&primary_release_date.lte=${today}`)
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