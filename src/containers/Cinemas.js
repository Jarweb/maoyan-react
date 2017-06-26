import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchCinemas, setRouterInfo} from '../redux-actions/index'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import CinemaItem from '../components/CinemaItem.js'

import './Cinemas.css'

class Cinems extends Component {
	constructor(props) {
	 	super(props);
	}

	componentWillMount() {
		const {dispatch, match, history, location} = this.props 
		console.log(match)
		dispatch(fetchCinemas())
		dispatch(setRouterInfo({match, history, location}))
	}
	
	render() {
		const {cinemas, mid} = this.props 
		console.log(mid)
		
		const Cinemas = cinemas.map(cinema => 
			<CinemaItem cinema={cinema} key={cinema.id} mid={mid} />
		) 

		return (
			<div className="cinema-list-wrap"> 
				{Cinemas}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		cinemas: state.cinemas
	}
}

export default connect(mapStateToProps)(Cinems)