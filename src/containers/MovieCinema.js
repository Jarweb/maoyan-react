import React, {Component} from 'react'
import Header from '../components/Header.js' 
import Cinemas from './Cinemas.js'

class MovieCinema extends Component {
	constructor(props) {
	  	super(props);
	}

	getToday = () => {
		let month = (new Date()).getMonth() + 1
		let day = (new Date()).getDate()

		return `${month}月${day}号`
	}

	leftHandle = () => {
		const {history} =  this.props 
		history.goBack(-1)
	}

	render() {
		const {location} = this.props 
		const mid = location.search.split('?')[1].split('=')[1] || ''
		console.log(mid)

		return (
			<div>
				<Header 
					left="返回" 
					title={this.getToday()} 
					leftHandle={this.leftHandle} />
				<Cinemas mid={mid} />
			</div>
		)
	}
}

export default MovieCinema