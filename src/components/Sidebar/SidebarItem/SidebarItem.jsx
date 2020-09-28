import React from "react";

import './SidebarItem.scss'

import {NavLink} from "react-router-dom";

export function SidebarItem({ name }) {
	return (
		<li className='sidebar__item'>
			<NavLink to='/' activeClassName='active'>
				<svg className="icon-pound sidebar__icon">
					<use xlinkHref="#icon-pound"/>
				</svg>
			{name}
			</NavLink>
		</li>
	)
}
