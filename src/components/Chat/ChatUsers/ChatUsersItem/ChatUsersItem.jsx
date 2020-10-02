import React from "react";

import './ChatUsersItem.scss'

export function ChatUsersItem(props) {
	const { profile, onSelect } = props

	return (
		<li className='chat__users-item chat-users-item' onClick={()=> onSelect(profile)}>
			<div className='chat-users-item__ava'>
				<img
					src={profile.img}
					alt="ava"/>
				<div></div>
			</div>
			<div className='chat-users-item__wrap'>
				<span className='chat-users-item__name'>
					{profile.name}
				</span>
				<span className='chat-users-item__status'>
					{profile.status}
				</span>
			</div>
		</li>
	)
}
