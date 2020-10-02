import React from "react";

import './Sidebar.scss'

export const Sidebar = (props) => {
	const {user, children, chat} = props
	return (

			<nav className={`sidebar${chat ? ' sidebar--chat' : ''}`}>
				{children}
				{user}
			</nav>
	)
}
