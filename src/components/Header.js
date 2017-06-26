import React from 'react'
import './Header.css'

const Header = ({title, left, right, leftHandle, rightHandle}) => {

	return (
		<div className="header">
			{
				left &&
				<span 
					className="left"
					onClick={leftHandle}>
					{left}
				</span>
			}
			<span> {title} </span>
			{
				right && 
				<span 
					className="right"
					onClick={rightHandle}>
					{right}
				</span>
			}
		</div>
	)

}

export default Header