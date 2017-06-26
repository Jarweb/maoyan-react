import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchIndex, setRouterInfo} from '../redux-actions/index'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Navbar from '../components/Navbar'
import Header from '../components/Header.js'
import MovieItem from '../components/MovieItem'
import MovieDetail from './MovieDetail.js'

import './Movies.css'

class Movies extends Component {
	constructor(props) {
	 	super(props);
	}

	componentWillMount() {
		const {dispatch, match, history, location} = this.props 
		console.log(this.props)
		dispatch(fetchIndex())
		dispatch(setRouterInfo({match, history, location}))
	}


	render() {
		const {movies}  = this.props

		const movieList = movies.map(movie => 
			<MovieItem movie={movie} key={movie.id} />
		)

		return (
			<div className="movie-list-wrap"> 
				{movieList}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		movies: state.movies
	}
}

export default connect(mapStateToProps)(Movies)