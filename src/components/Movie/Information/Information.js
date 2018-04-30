import React, { Component } from 'react';

import './Information.css';

class Information extends Component {
	constructor(...props) {
		super(...props);

		this.languages = {
			es: 'Español',
			en: 'Ingles'
		};
	}
	render() {
		let movie = this.props.movie;
		return(
			<div className="container">
				<ul>
					<li>
						<p><strong>Titulo original</strong></p>
						<p>{movie.original_title}</p>
					</li>					
					<li>
						<p><strong>Estado</strong></p>
						<p>{movie.status}</p>
					</li>
					<li>
						<p><strong>Estreno</strong></p>
						<time dateTime={movie.release_date}>
							{movie.release_date}
						</time>
						
					</li>
					<li>
						<p><strong>Lenguaje Original</strong></p>
						<p>{this.languages[movie.original_language]}</p>
					</li>
					<li>
						<p><strong>Duración</strong></p>
						<p>{movie.status}</p>
					</li>
					<li>
						<p><strong>Presupuesto</strong></p>
						<p>{movie.status}</p>
					</li>
					<li>
						<p><strong>Ingresos</strong></p>
						<p>{movie.status}</p>
					</li>
					<li>
						<p><strong>Sitio Oficial</strong></p>
						<p><a href={movie.homepage}>{movie.homepage}</a></p>
					</li>
					<li>
						<p><strong>Genres</strong></p>
						<div className="tags">
							{
								movie.genres.map((genre, index) => {
									return(
										<span className="tag is-dark is-rounded" key={genre.id}>{genre.name}</span>
									);
								})
							}
						</div>
					</li>
					<li>
						<p><strong>Palabras Clave</strong></p>
						<p>Avengers infinity war</p>
					</li>


				</ul>
			</div>
		);
	}
}

export default Information;