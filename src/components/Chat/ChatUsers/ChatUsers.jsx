import React, {useState} from "react";

import {useOutsideAlerter} from "../../../hooks/OutsideAlerter";

import './ChatUsers.scss'

import {ChatUsersItem} from "./ChatUsersItem/ChatUsersItem";


export function ChatUsers(props) {
	const {users} = props

	const {visible, setVisible, ref} = useOutsideAlerter()

	const [activeUser, setActiveUser] = useState(null)

	function handleSelect(user) {
		setActiveUser(user)
		setVisible(!visible)
	}

	return (
		<div className='chat__users users-chat' >
			{
				visible &&
				<div className='chat__users-popup chat-users-popup' ref={ref} >
					<div className='chat-users-popup__header'>
						<img
							src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.VM6bv6ifg8PgNRd7xz64BAHaHa%26pid%3DApi&f=1'
							alt="ava"/>
						<span className='chat-users-popup__name'>
						{/*{profile.name}*/}
							dima test
					</span>
					</div>
					<div className='chat-users-popup__body'>
						<span className='chat-users-popup__role-head'>Нет ролей</span>
						<span className='chat-users-popup__role-body'>админ</span>
						<span className='chat-users-popup__node-head'>Заметка</span>
						<input className='chat-users-popup__node-body'/>
						<input className='chat-users-popup__message'/>
					</div>
				</div>
			}
			<div className='users-chat__online'>
				<h1>В сети</h1>
				{users.map(u => <ChatUsersItem key={u.id} profile={u} onSelect={handleSelect}/>)}
			</div>
		</div>
	)
}
