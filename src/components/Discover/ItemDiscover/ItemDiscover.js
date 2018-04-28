import React, { Component } from 'react';

class ItemDiscover extends Component {

	render() {
		let data = this.props.data;
		return(

			<div className="column is-half-mobile is-4-tablet is-3-desktop">
			<div className="card">
				<div className="card-image">
					<figure className="image is-2by3">
						<img src={data.poster_path === null ? 'http://via.placeholder.com/300x450' : `https://image.tmdb.org/t/p/w300/${data.poster_path}`} alt="Imagen de la pelicula"/>
					</figure>
				</div>
				<div className="card-content">
					<div className="media-content">
				    	<p className="title is-4">{ data.title }</p>
				    </div>
			      	<time dateTime={data.release_date}>{data.release_date}</time>
				    <div className="content">
				    	{ data.overview.substr(0, 100) + "..." }
				    </div>			    			    
				</div>
				
			</div>
			</div>

		);
	}
}

export default ItemDiscover;