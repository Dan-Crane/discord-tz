import React from "react";

import './SidebarItem.scss'

import {NavLink} from "react-router-dom";

export function SidebarItem( props ) {
	const { name, id } = props

	return (
		<li className='sidebar__item'>
			<NavLink to={`/room/${id}`} activeClassName='active'>
				<svg className="icon-pound sidebar__icon">
					<use xlinkHref="#icon-pound"/>
				</svg>
			{name}
			</NavLink>
		</li>
	)
}
