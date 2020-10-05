import React from "react";

import './ChatUsersItem.scss'

export function ChatUsersItem(props) {
	const { user, onSelect, openModal } = props

	return (
		<li className='chat__users-item chat-users-item' onClick={() => {
			onSelect(user)
			openModal(true)
		}}>
			<div className='chat-users-item__ava'>
				<img
					src={ user.img || 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.vFK3EwPLrvUWNEGCAhfvjwHaHa%26pid%3DApi&f=1'}
					alt="ava"/>
				{user.online ? <div style={{backgroundColor: '#4fb511'}}/> : <div/>}
			</div>
			<div className='chat-users-item__wrap'>
				<span className='chat-users-item__name'>
					{user.name}
				</span>
				<span className='chat-users-item__status'>
					{user.status}
				</span>
			</div>
		</li>
	)
}
