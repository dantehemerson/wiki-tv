import React, { Component } from 'react';

import './CastItem.css'

class CastItem extends Component {
	render() {
		const link = 'https://image.tmdb.org/t/p/w300';
		return(
			<div className="column is-4-mobile is-half-tablet is-4-desktop is-3-widescreen">
				<div className="card cast-item-card">
					<div className="card-image">
					    <figure className="image is-2by3">
					    	<img src={this.props.data.profile_path ? link + this.props.data.profile_path : 'http://via.placeholder.com/300x450'}  alt={this.props.data.name}/>
					    </figure>
					</div>
					<div className="card-content">
						<div className="media">
							<div className="media-content">
						        <p className="title is-6">{this.props.data.name}</p>
						        <p className="subtitle is-7">{this.props.data.character}</p>
						    </div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CastItem;