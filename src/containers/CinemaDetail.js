import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchCinema, setCurDay} from '../redux-actions/index.js'

import Header from '../components/Header.js'
import CinemaIntro from '../components/CinemaIntro.js'
import './CinemaDetail.css'

class CinemaDetail extends Component {
	constructor(props) {
	  	super(props);
		this.state = {
			mid: -1,
			cid: -1,
			curDay: ''
		}
	}

	componentWillMount() {
		const {dispatch, match, location} = this.props 
		let mid = location.search.split('?')[1].split('=')[1]
		let cid = match.params.id

		this.setState({
			mid,
			cid,
		})
		dispatch(fetchCinema(cid, mid))
	}

	leftHandle = () => {
		this.props.history.goBack(-1)
	}

	changePic = (mid) => {
		let cid = this.state.cid

		this.props.dispatch(fetchCinema(cid, mid))
	}

	changeDay = (day) => {
		console.log(day)
		this.props.dispatch(setCurDay(day))
	}	

	render() {
		const {curDay,Dates,currentMovie,cinemaDetailModel,movies,DateShow} = this.props 

		return(
			<div>
				{
					cinemaDetailModel &&
					<Header 
						title={cinemaDetailModel.nm}
						left="返回"
						leftHandle={this.leftHandle} />
				}

				{
					cinemaDetailModel &&
					<CinemaIntro cinemaDetail={cinemaDetailModel} />
				}

				<div className="cinema-movie-gallery">
					{	
						movies && currentMovie &&
						<div 
							style={{width: ((movies.length+1)*100 + 20)+"px"}}
							className="cinema-movie-gallery-inner">
								{
									movies.map((item, index) => 
										<div  
											key={index}
											onClick={() => this.changePic(item.id)}
											className={currentMovie.id === item.id ? 'cinema-movie-item picActive' : 'cinema-movie-item'}>
											<img src={item.img} />
										</div>
									)
								}
						</div>
					}
				</div>

				<div className="cinema-buy-list">
					{
						currentMovie &&
							<div className="cinema-buy-head">
								<strong>{currentMovie.nm}</strong> 
								<span>{currentMovie.sc}分</span>
								<div>{currentMovie.ver}</div>
							</div>
					}
					<div className="cinema-buy-date">
						{
							Dates &&
							<div 
								style={{width: ((Dates.length+1)*80 + 20)+"px"}}
								className="cinema-buy-date-inner">
									{
										Dates.map((item, index) => 
											<span 
												className={curDay == item.slug ? 'dayActive' : ''}
												onClick={() => this.changeDay(item.slug)}
												key={index}>{item.text}</span>
										)
									}
							</div>
						}
					</div>

					<div className="cinema-buy-item-wrap">
						{
							DateShow && Dates &&
							DateShow[curDay].map((item, index) => 
								<Link
									to={`/cinemaseat?sid=${item.showId}&sdate=${item.showDate}`}
									className="cinema-buy-item" 
									key={index}>
									<div className="cinema-buy-item-time">
										<div className="cb-item-up">{item.tm}</div>
										<div className="cb-item-down">{item.end}</div>
									</div>
									<div className="cinema-buy-item-cinema">
										<div className="cb-item-up">{item.lang} {item.tp}</div>
										<div className="cb-item-down">{item.th}</div>
									</div>
									<div className="cinema-buy-item-btn">
										<span>选座购票</span>
									</div>
								</Link>
							)
						}
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	console.log(state)
	return {
		Dates: state.cinema.Dates,
		currentMovie: state.cinema.currentMovie,
		cinemaDetailModel: state.cinema.cinemaDetailModel,
		movies: state.cinema.movies,
		DateShow: state.cinema.DateShow,
		curDay: state.cinema.curDay
	}
}

export default connect(mapStateToProps)(CinemaDetail)