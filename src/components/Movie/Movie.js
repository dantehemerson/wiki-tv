import React, { Component } from 'react';


import './Movie.css';

class Movie extends Component {
	constructor(...props) {
		super(...props);

		this.state = {
			movie: {
				genres: [],
				credits: {
					cast: [],
					crew: []
				}
			}
		}

		this.getData = this.getData.bind(this);
	}

	getData() {
		const key = '954c577b7ec500b5c660c0212e03029f';		
		console.log(this.props.match.params.id);

	}

	componentDidMount() {
	  this.getData();
	}
	
	render() {
		return(
			<div>
				<div className="backdrop">
					<div className="container">
						<h1></h1>	

					</div>
				</div>
			</div>
		);
	}
}


export default Movie;