import React, { Component } from 'react';

import CircularPercentage from '../CircularPercentage/CircularPercentage';

import './ActionButtons.css';


class ActionButtons extends Component {

	render() {
		return(
			<div className="action-buttons">
				<div className="circular-percentage-container">
					<CircularPercentage percentage={this.props.percentage * 10}/>
				</div>
				<div className="title-circular-percentage">
						<strong className="is-size-7">
							Puntuación <br/>de<br/> usuario
						</strong>
				</div>
				<div className="favorite-button-container">
					<a className="material-icons md-24">favorite
					</a>
					<span className="tooltip-container">
						<span className="tooltip">Añadir&nbsp;a&nbsp;mis&nbsp;favoritos</span>
					</span>

				</div>	
			</div>
		);
	}
}


export default ActionButtons;