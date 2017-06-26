import React, {Component} from 'react'
import Header from '../components/Header.js'
import './CitySelect.css'

class CitySelect extends Component {

	render() {
		const {curCity, isShow, closeHandle, selectHandle} = this.props

		return (
			<div 
				className={isShow ? 'city-wrap city-in' : 'city-wrap city-out'}>
				<Header 
					title={`当前城市-${curCity}`} 
					left="关闭"
					leftHandle={closeHandle} />
				<div className="city-title">热门城市</div>
				<div className="city-item-wrap">
					<div className="city-item" onClick={() => selectHandle('上海')}>上海</div>
					<div className="city-item" onClick={() => selectHandle('北京')}>北京</div>
					<div className="city-item" onClick={() =>selectHandle('广州')}>广州</div>
					<div className="city-item" onClick={() =>selectHandle('深圳')}>深圳</div>
					<div className="city-item" onClick={() =>selectHandle('杭州')}>杭州</div>
					<div className="city-item" onClick={() =>selectHandle('武汉')}>武汉</div>
					<div className="city-item" onClick={() =>selectHandle('成都')}>成都</div>
				</div>

			</div>
		)
	}	
}

export default CitySelect