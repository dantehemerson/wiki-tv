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
		const id = this.props.match.params.id;

		fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US&append_to_response=credits`)
			.then(response => {
				if(response.status !== 200) {
					console.log('Error: ' + response.status);
					return;
				}

				response.json().then(data => {
					const movie = data;
					this.setState({ movie });
					console.log(this.state.movie)
				});
			})
			.catch(err => {
				console.log('Fetch Error :-S', err);
			})

	}

	componentDidMount() {
	  this.getData();
	}

	render() {
		return(
			<div>
				<div className="backdrop">
					<div className="container">
						<div className="columns is-centered">
							<div className="column is-4">
								<figure className="image is-2by3">
									<img src={this.state.movie.poster_path === null ? 'http://via.placeholder.com/300x450' : `https://image.tmdb.org/t/p/w300/${this.state.movie.poster_path}`} alt="Imagen de la pelicula"/>
								</figure>
							</div>
							<div className="column">
								<h1 className="title ">{ this.state.movie.title }</h1>	
								
							</div>
						</div>


					</div>
				</div>
			</div>
		);
	}
}


export default Movie;