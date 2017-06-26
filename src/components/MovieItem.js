import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import './MovieItem.css'

const MoveItem = ({movie}) => {
	return (
		<Link
			className="item-wrap" 
			to={`/movie/${movie.id}`}>
			<div className="item-img-wrap">
				<img className="item-img" src={movie.img}></img>
			</div>
			<div className="item-desc">
				<div className="item-title ellipse">{movie.nm}</div>
				<div className="item-title2">{movie.cat}</div>
				<div className="item-title2 ellipse">主演: {movie.star}</div>
				<div className="item-title2">今天146家影院放映200场</div>
				<span className="item-tip">{movie.sc}分</span>
				<span className="item-btn">购票</span>
			</div>
		</Link>
	)
}


export default MoveItem