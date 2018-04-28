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
			      	<time dateTime="2016-1-1">1 Jan 2016</time>
				    <div className="content">
				      	Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				      	Phasellus nec iaculis mauris. <a>@bulmaio</a>.
				      	<a href="#">#css</a> <a href="#">#responsive</a>
				      	<br/>
				    </div>			    			    
				</div>
				
			</div>
			</div>

		);
	}
}

export default ItemDiscover;