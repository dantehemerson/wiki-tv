import React, { Component } from 'react';


class HeaderNav extends Component {

	constructor(...props) {
		super(...props);

		this.toogleMenu.bind(this)();

	}

	toogleMenu() {
		document.addEventListener('DOMContentLoaded', function () {

		  // Get all "navbar-burger" elements
		  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

		  // Check if there are any navbar burgers
		  if ($navbarBurgers.length > 0) {

		    // Add a click event on each of them
		    $navbarBurgers.forEach(function ($el) {
		      $el.addEventListener('click', function () {

		        // Get the target from the "data-target" attribute
		        var target = $el.dataset.target;
		        var $target = document.getElementById(target);

		        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
		        $el.classList.toggle('is-active');
		        $target.classList.toggle('is-active');

		      });
		    });
		  }

		});
	}

	render() {
		return(
			<div className="has-background-success">
				<div className="container">
					<nav className="navbar is-success">
						<div className="navbar-brand">
							<a className="navbar-item" href="/">
								<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/TV_Tokyo_logo_20110629.svg/1200px-TV_Tokyo_logo_20110629.svg.png" alt="Wiki Tv: Find movies and series"/>
							</a>
							<div className="navbar-burger burger" role="button" data-target="navMenu" aria-expanded="false">
							    <span></span>
							    <span></span>
							    <span></span>
							</div>
						</div>
						<div className="navbar-menu" id="navMenu">
							<div className="navbar-start">
								<a className="navbar-item">Home</a>
								<a className="navbar-item">About</a>
								<a className="navbar-item">Contact</a>
							</div>
						</div>
					</nav>
				</div>
			</div>
			);
	}
}

export default HeaderNav;