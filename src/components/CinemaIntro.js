import React from 'react'
import './CinemaIntro.css'

const CinemaItro = ({cinemaDetail}) => {

	const intro = () => ({
		__html: cinemaDetail.note
	})

	return (
		<div className="cinema-intro-wrap">
			<div className="cinema-intro-title">{cinemaDetail.nm} <span>{cinemaDetail.sellmin}元起</span></div>
			<div className="cinema-intro-ad">{cinemaDetail.addr} <span>地图{cinemaDetail.lat,cinemaDetail.lng}</span></div>
			<div className="cinema-intro-tag">
				{
					cinemaDetail.featureTags.map((item, index) => 
						<span key={index}>{item.tag}</span>
					)
				}
			</div>
			<div className="cinema-intro-tip">{cinemaDetail.park}</div>
			<div className="cinema-intro-tip">联系电话:
				{
					cinemaDetail.tel.map((item, index) => 
						<span key={index}>{item}</span>
					)
				}
			</div>
		</div>
	)
}

export default CinemaItro