import React, { Component } from 'react'
import { connect } from 'react-redux'
import {setRouterInfo} from '../redux-actions/index'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import './Mine.css'

class Mine extends Component {
	constructor(props) {
		super(props);
		
	}

	componentWillMount() {
		const {dispatch, match, history, location} = this.props 
		console.log(this.props)
		dispatch(setRouterInfo({match, history, location}))
	}

	render() {
		
		return (
			<div className="mine-wrap">
				<div className="mine-head">
					<div className="avatar-img"></div>
					<div className="mine-name">立即登录</div>
				</div>

				<div className="mine-item-wrap">
					<div className="mine-item">我的订单</div>
					<div className="mine-item">我的收藏</div>
					<div className="mine-item">会员中心</div>
					<div className="mine-item">设置</div>
				</div>
			</div>
		)
	}
	
}

const mapStateToProps = state => {
	console.log(state)
	return {}
}

export default connect(mapStateToProps)(Mine)