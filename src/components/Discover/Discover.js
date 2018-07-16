import React, { Component } from 'react'
import Movies from './Movies/Movies'
import { connect } from 'react-redux'	
import { getMovies } from '../../actions'

class Discover extends Component {
	render() {				
		return (
			<div>				
				<Movies movies={this.props.discover.data}/>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		discover: state.discover,
	}
}

const mapDispatchToProps = dispatch => ({
	getData: (page) => dispatch(getMovies(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(Discover);