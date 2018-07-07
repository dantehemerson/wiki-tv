import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './ItemDiscover.css';

class ItemDiscover extends Component {

	render() {
		let data = this.props.data;
		return(
			<div className="column is-half-mobile is-4-tablet is-3-desktop col-item-discover">
				<div className="card card-item-discover">

					<div className="card-image">
						<Link to={`/movie/${ data.id }`}>
							<figure className="image is-2by3">
								<img src={data.poster_path === null ? 'http://via.placeholder.com/300x450' : `https://image.tmdb.org/t/p/w300/${data.poster_path}`} alt="Imagen de la pelicula"/>
							</figure>
						</Link>
					</div>
					<div className="card-content">
						<div className="media-content">
							<Link  to={`/movie/${ data.id }`}>
					    		<span className="title is-4">{ data.title }</span>
					    	</Link>
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