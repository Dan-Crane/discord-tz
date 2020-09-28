import React from "react";

import  './Sidebar.scss'

export const Sidebar = ({ user, children }) => {
	return (
		<nav className='sidebar'>
			{children}
			{user}
		</nav>
	)
}
