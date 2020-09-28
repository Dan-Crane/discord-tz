import React from "react";

import './ChatHeader.scss'

export function ChatHeader({text}) {
	return (
		<div className='content__header'>
			<svg className="icon-pound content__icon">
				<use xlinkHref="#icon-pound"/>
			</svg>
			<h1 className='content__title'>
				{text}
			</h1>
		</div>
	)
}
