import React, { Component } from 'react';

import './Information.css';

class Information extends Component {
	constructor(...props) {
		super(...props);

		this.languages = {
			es: 'Español',
			en: 'Ingles'
		};

		this.movieStatus = {
			Released: 'Estrenada',
			Rumored: 'Se Rumorea',
			Planned: 'Planificado',
			'In Production': 'Produccion',
			'Post Production': 'Post Produccion',
			'Canceled': 'Cancelado'
		};

		this.moneyToDollars = this.moneyToDollars.bind(this);
		this.minutesToHours = this.minutesToHours.bind(this);
	}

	moneyToDollars(money) {		
		if(money) {
			money = money.toString();
			let res = '', i = 0;
			for(i = money.length - 3; i >= 0; i-=3) {				
				res += money.substr(i, 3) + (i === 0 ? '' : ',');
			}
			if(i !== -3) {
				res += money.substr(0, 3 + i);
			}
			res = '$' + res.split(',').reverse().join(',') + '.00';				
			return res;
		}
		
		return 'Este dato no esta disponible';
	}

	minutesToHours(minutes) {
		return Math.floor(minutes/60) + 'h ' + minutes%60 + 'm';
	}

	render() {
		let movie = this.props.movie;
		return(
			
			<div className="columns column-padding is-mobile is-multiline  info-container">
				<div className="column is-12">
					<h3 className="title is-5">Datos</h3>
					<hr/>
					<ul>
						<li>
							<p><strong>Titulo original</strong></p>
							<p>{movie.original_title}</p>
						</li>					
						<li>
							<p><strong>Estado</strong></p>
							<p>{this.movieStatus[movie.status]}</p>
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
							<p>{this.minutesToHours(movie.runtime)}</p>
						</li>
						<li>
							<p><strong>Presupuesto</strong></p>
							<p>{ this.moneyToDollars(movie.budget) }</p>
						</li>
						<li>
							<p><strong>Ingresos</strong></p>
							<p>{ this.moneyToDollars(movie.revenue) }</p>
						</li>
						<li>
							<p><strong>Sitio Oficial</strong></p>
							<p><a href={movie.homepage} target="_blank">{movie.homepage}</a></p>
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
					</ul>
				</div>
			</div>
			
		);
	}
}

export default Information;