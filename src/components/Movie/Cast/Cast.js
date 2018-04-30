import React, { Component } from 'react';

import CastItem from './CastItem/CastItem';

import './Cast.css';

class Cast extends Component {
	render() {
		return(
			
			<div className="columns column-padding is-multiline is-mobile">
				<div className="column is-12">
					<h3 className="title is-5">Actores principales</h3>			
				</div>

				{					
					this.props.cast.slice(0, 6).map((element, index) => {
						return(
							<CastItem data={element} key={index}/>
						);
					})
				}									
			</div>
		);
	}
}

export default Cast;