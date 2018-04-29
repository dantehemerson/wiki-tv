import React, { Component } from 'react';

import Cast from './Cast/Cast';

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

		fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=es&append_to_response=credits`)
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

	getBackdropImage() {

	}

	render() {		
		return(
			<div>
				<div className="backdrop" style={ this.state.movie.backdrop_path ? {backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${this.state.movie.backdrop_path}`} : {backgroundImage: `https://www.laprensagrafica.com/__export/1519481573255/sites/prensagrafica/img/2018/02/24/rachel_crop1519481522365.jpg_525981578.jpg`} }>
					<div className="backdrop-backcolor">
						<div className="container movie-container">					
							<div className="columns is-centered is-multiline">
								<div className="column is-12 movie-data-header is-hidden-tablet">
									<h1 className="title is-3 has-text-centered">{ this.state.movie.title }</h1>
								</div>
								<div className="column is-4">
									<figure className="image is-2by3">
										<img src={this.state.movie.poster_path ? `https://image.tmdb.org/t/p/w780/${this.state.movie.poster_path}` : 'http://via.placeholder.com/300x450'} alt="Imagen de la pelicula"/>
									</figure>
								</div>
								<div className="column movie-data-header">
									<h1 className="title is-2 is-hidden-mobile">{ this.state.movie.title }</h1>	

									<div className="place">
										<h2 className="title is-4">General</h2>
										<p>{ this.state.movie.overview ? this.state.movie.overview : 'Lo sentimos, no tenemos una descripcion disponible.' }</p>
									</div>							
									
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<Cast cast={this.state.movie.credits.cast }/>
				</div>
			</div>
		);
	}
}


export default Movie;