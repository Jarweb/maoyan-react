import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchMovieDetail, setRouterInfo} from '../redux-actions/index.js'
import Header from '../components/Header.js'
import MovieIntro from '../components/MovieIntro.js'
import MovieComments from '../components/MovieComments.js'
import './MovieDetail.css'

class MovieDetail extends Component {
	constructor(props) {
	 	super(props);
	}

	componentWillMount() {
		const {dispatch, match, history, location} = this.props
		console.log(match)
		dispatch(fetchMovieDetail(match.params.id))
		dispatch(setRouterInfo({match, history, location}))
	}

	backHandle = () => {
		const {history} = this.props
		history.goBack(-1)
	}

	render() {
		console.log(this.props)
		const {movie, comments, hotComments} = this.props

		return (
			<div className="movie-detail-wrap">
				{
					movie &&
					<Header 
						title={movie.nm} 
						left="返回" 
						leftHandle={this.backHandle} />
				}
				{
					movie &&
					<MovieIntro movie={movie} />
				}
				{
					comments &&
					<MovieComments comments={comments} title="观众评论" />
				}
				{
					comments &&
					<MovieComments comments={hotComments} title="专业评论" />
				}
				{
					movie &&
					<Link 
						to={`/moviecinema?mid=${movie.id}`}
						className="movie-detail-btn">立即购买</Link>
				}
			</div>
		)
	}	
}

const mapStateToProps = state => {
	console.log(state)

	return {
		movie: state.movie.detail,
		comments: state.movie.comments,
		hotComments: state.movie.hotComments
	}
}

export default connect(mapStateToProps)(MovieDetail)