import React from 'react'
import './MovieIntro.css'


const MovieIntro = ({movie}) => {
	const intro = () => ({
		__html: movie.dra
	})
	
	return (
		<div className="movie-intro-wrap">
			<div 
				className="movie-intro-head">
				<div 
					className="intro-bg"
					style={{backgroundImage: `url(${movie.img})`}}></div>
				<div className="intro-filter"></div>
				<div className="intro-info">
					<img className="intro-head-img" src={movie.img}/>
					<div className="intro-head-desc">
						<div className="intro-head-title">{movie.nm}</div>
						<div className="intro-head-sc-wrap">
							<div className="intro-head-sc-left">
								评分:
								<span className="intro-head-sc">{movie.sc}分 <span>({movie.wish}人评)</span></span>
							</div>
						</div>
						<div className="intro-head-subtitle">{movie.cat}  {movie.src}/{movie.dur}分钟</div>
						<div className="intro-head-subtitle">{movie.ver}</div>
						<div className="intro-head-subtitle">{movie.rt}</div>
					</div>
				</div>
			</div>

			<div className="intro-body" dangerouslySetInnerHTML={intro()}></div>
			<div className="intro-vd">
				<div className="intro-vd-title">影片预告</div>
				<video  controls="controls" autoPlay="autoPlay">
					<source src={movie.vd} type="video/mp4" />
				</video>
			</div>
		</div>
	)
}

export default MovieIntro