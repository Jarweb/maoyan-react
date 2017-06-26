import React from 'react'
import{Link} from 'react-router-dom'

import './CinemaItem.css'

const CinemaItem = ({cinema, mid}) => {
	return (
		<Link 
			to={`/cinema/${cinema.id}?mid=${mid}`}
			className="cinema-item-wrap">
			<div className="cinema-item-title-wrap">
				<span className="cinema-item-title">{cinema.nm}</span>
				<span className="cinema-item-tip">{cinema.sellPrice}元起</span>
			</div>
			<div className="cinema-item-subtitle-wrap">
				<span className="cinema-item-subtitle ellipse">{cinema.addr}</span>
				<span className="cinema-item-subtip">{cinema.distance}米</span>
			</div>
		</Link>
	)
}

export default CinemaItem