import React, {useState} from "react";

import {useOutsideAlerter} from "../../../hooks/OutsideAlerter";

import './ChatUsers.scss'

import {ChatUsersItem} from "./ChatUsersItem/ChatUsersItem";
import {useStore} from "../../../hooks/store";


export function ChatUsers(props) {
	const {users} = props

	const {state} = useStore()

	const {visible, setVisible, ref} = useOutsideAlerter()

	const [activeUser, setActiveUser] = useState(null)
	const [valueNode, setValueNode] = useState('')

	function handleSelect(user) {
		setActiveUser(user)
		setVisible(!visible)
	}

	return (
		<div className='chat__users users-chat'>
			{
				visible &&
				<div className='chat__users-popup chat-users-popup' ref={ref}>
					<div className='chat-users-popup__header'>
						<img
							src={activeUser.img}
							alt="ava"/>
						<span className='chat-users-popup__name'>
						{activeUser.name}
					</span>
					</div>
					<div className='chat-users-popup__body'>
						<span className='chat-users-popup__role-head'>Нет ролей</span>
						{activeUser.role && <span className='chat-users-popup__role-body'>{activeUser.role}</span>}
						<span className='chat-users-popup__node-head'>Заметка</span>
						<input className='chat-users-popup__node-body'
									 placeholder='Нажмите чтобы добавить заметку'
									 value={valueNode}
									 onChange={(e) => setValueNode(e.target.value)}
									 onBlur={() => console.log(valueNode)}/>
						<input className='chat-users-popup__message'
									 placeholder='Введите сообдение'/>
					</div>
				</div>
			}
			<div className='users-chat__online'>
				<h3>В сети</h3>
				{state.people.map(u => <ChatUsersItem key={u.id} profile={u} onSelect={handleSelect}/>)}
			</div>
		</div>
	)
}
