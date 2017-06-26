import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchIndex} from '../redux-actions/index'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Navbar from '../components/Navbar'
import Header from '../components/Header.js'
import Movies from './Movies'
import Cinemas from './Cinemas.js'
import Mine from './Mine.js'
import MovieDetail from './MovieDetail.js'
import CinemaDetail from './CinemaDetail.js'
import MovieCinema from './MovieCinema.js'
import CinemaSeat from '../containers/CinemaSeat'
import CitySelect from '../containers/CitySelect.js'

class App extends Component {
	constructor(props) {
	  	super(props);
		
		this.state = {
			showCity: false,
			curCity: '广州'
		}
	}

	leftHandle = () => {
		this.setState({
			showCity: true
		})
	}

	closeCityHandle = () => {
		this.setState({
			showCity: false
		})
	}

	selectHandle = (city) => {
		console.log(city)
		this.setState({
			curCity: city,
			showCity: false
		})
	}

	render() {
		console.log(this.props)
		const {location} = this.props 
		const isMatch = (location.pathname == '/' || location.pathname == "/cinemas") ? true : false 
		const isMine = location.pathname == "/mine" ? true : false
		console.log(isMatch)

		const movieDetail = () => <MovieDetail />

		return (
			<div>
				{
					isMatch &&
					<Header 
						title="猫眼电影" 
						left={this.state.curCity}
						leftHandle={this.leftHandle} />
				}

				<Route exact  path="/" component={Movies} />
				<Route path="/cinemas" component={Cinemas} />
				<Route path="/mine" component={Mine} />
				<Route path="/movie/:id" component={MovieDetail} />
				<Route path="/moviecinema" component={MovieCinema} />
				<Route path="/cinema/:id" component={CinemaDetail} />
				<Route path="/cinemaseat" component={CinemaSeat} />

				{
					this.state.showCity && 
					<CitySelect 
						curCity={this.state.curCity}
						selectHandle={this.selectHandle}
						closeHandle={this.closeCityHandle}
						isShow={this.state.showCity} />
				}
				{
					(isMatch || isMine) && <Navbar />
				}
			</div>
		)
	}
}

const mapStateToProps = state => {
	console.log(state)
	return {
		state
	}
}

export default connect(mapStateToProps)(App)