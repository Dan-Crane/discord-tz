import React from "react";

import {useLocation} from 'react-router-dom'

import './ChatHeader.scss'
import {useStore} from "../../../hooks/store";

export function ChatHeader(props) {
	const {state} = useStore()

	let idRoom = useLocation().pathname.split('/')[2] || null
	let test = idRoom ? state.rooms.find(r => r.id === +idRoom).name : 'Выберите компнату'

	return (
		<div className='content__header'>
			<svg className="icon-pound content__icon">
				<use xlinkHref="#icon-pound"/>
			</svg>
			<h1 className='content__title'>
				{test}
			</h1>
		</div>
	)
}
