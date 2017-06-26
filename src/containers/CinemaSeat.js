import React, {Component} from 'react'
import {fetchSeat} from '../redux-actions/index.js'
import { connect } from 'react-redux'
import Header from '../components/Header.js'

import './CinemaSeat.css'

class CinemaSeat extends Component {
	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		selected: -1
	  	};
	}
	componentWillMount() {
		const {dispatch, location} = this.props
		let res
		location.search
		.split('?')[1]
		.split('&')
		.forEach((item, index) => {
			item && (res[item.split('=')[0]] = item.split('=')[1])
		}, res = {})

		console.log(res)
		dispatch(fetchSeat(res.sid, res.sdate))
	}

	leftHandle = () => {
		this.props.history.goBack(-1)
	}

	render() {
		const {sections, showInfo} = this.props
		const {selected} = this.state

		return (
			<div>
				<Header 
					title={showInfo.movieName}
					left="返回"
					leftHandle={this.leftHandle} />
				<div className="seat-head">
					<div className="seat-name">{showInfo.cinemaName}</div>
					<div className="seat-tip">
						<span>{showInfo.showTime}</span>
						<span>{showInfo.lang}</span>
						<span>{showInfo.tp}</span>
						<span>{showInfo.hallName}</span>
					</div>
				</div>

				<div className="seat-stage"><span>银幕</span></div>
				<div className="seat-wrap">
					{
						sections[0] &&
						<div 
							style={{width: sections[0].columns * 20 + 'px'}}
							className="seat-inner-wrap">
							{
								sections[0].seatRows.map(row => 
									<div 
										className="seat-row"
										key={row.rowNum}>
										{
											row.seats.map(col => 
												(col.columnId)
												?<span 
													className={(col.seatNo || (selected == col.columnNum)) ? 'seat-col seat-active' : 'seat-col'}
													key={col.columnNum}></span>
												:<span key={col.columnNum} className="seat-col empty"></span>
											) 
										}
									</div>
								)
							}
						</div>
					}
				</div>

				<div className="seat-foot">
					<div className="seat-price">{showInfo.price}元</div>
					<div className="seat-btn">确认选座</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	console.log(state)
	return {
		sections: state.seat.sections || [],
		showInfo: state.seat.showInfo || {}
	}
}

export default connect(mapStateToProps)(CinemaSeat)

