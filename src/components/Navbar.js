import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

	return (
		<div className="nav-wrap">
			<Link className="nav-item" to='/'>影片</Link>
			<Link className="nav-item" to='/cinemas'>影院</Link>
			<Link className="nav-item" to='/mine'>我的</Link>
		</div>
	)
}

export default Navbar