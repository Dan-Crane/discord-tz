import React, {useState} from "react";

import './SidebarMenu.scss'

export function SidebarMenu({children, name}) {
	const [open, setOpen] = useState(false)

	return (
		<div className='sidebar__menu'>
			<div className='sidebar__head'
					 onClick={() => setOpen(!open)}>

			<svg className={`icon-play sidebar__dropdown-icon sidebar__dropdown-icon${open ? '--active' : ''}`}>
				<use xlinkHref="#icon-play"/>
			</svg>
			<h2 className='sidebar__title'>
				{name}
			</h2>
			</div>

			{open && <ul className='sidebar__list'>
				{children}
			</ul>}
		</div>
	)
}
