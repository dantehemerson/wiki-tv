import React, { Component } from 'react';

import './CircularPercentage.css';


class CircularPercentage extends Component {

	constructor(...props) {
		super(...props);

		this.animation = this.animation.bind(this);
	}

	componentDidMount() {
		// Por que demora en cargar las imagenes
		setTimeout(() => (this.animation()), 800);
	}

	animation() {
		let count = document.getElementById('count');
		let progress = document.getElementById('progress');

		let percentage = this.props.percentage;
		console.log(percentage)

		let total = Math.round((250 * percentage)/100);

		let currentPercentage = 0;

		let i = 0;
		let id = setInterval(()=> {
			if(i >= total) {
				clearInterval(id);
			} else {				
				progress.setAttribute('stroke-dasharray', `${i},251.2`);
				currentPercentage = Math.round((i * 100)/251.2) + 1;
				count.innerHTML = `${currentPercentage}`;
				
			}
			i++;
		}, 10);
	}

	render() {
		return( 	
			<svg id="animated" viewBox="0 0 100 100">
			  <circle cx="50" cy="50" r="50" fill="#0d8a54"/>
			  <path id="progress" strokeLinecap="round" strokeWidth="10" stroke="#fff" fill="none" strokeDasharray="0, 251.2" 
			        d="M50 10
			           a 40 40 0 0 1 0 80
			           a 40 40 0 0 1 0 -80">
			  </path>
			  <text id="count" x="48" y="55" textAnchor="middle" dy="7" fontSize="2.3rem" fill="white" style={{fontWeight: "bold"}}>0				  	
			  </text>
			  <text id="count" x="75" y="40" textAnchor="middle" dy="7" fontSize="15px" fill="white">%
			  </text>
			  
			</svg>
		);
	}
}

export default CircularPercentage;