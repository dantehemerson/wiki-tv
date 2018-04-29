import React, { Component } from 'react';

import CastItem from './CastItem/CastItem';

import './Cast.css';

class Cast extends Component {
	render() {
		return(
			<div>
				<div className="column">
					<h3 className="title is-5">Actores principales</h3>
				</div>
				<div className="columns column-padding is-multiline is-mobile">
					{					
						this.props.cast.slice(0, 6).map((element, index) => {
							return(
								<CastItem data={element} key={index}/>
							);
						})
					}						
				</div>
			</div>
		);
	}
}

export default Cast;