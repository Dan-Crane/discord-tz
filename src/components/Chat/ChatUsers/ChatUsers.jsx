import React, {useEffect, useState} from "react";
import {CSSTransition} from "react-transition-group";

import {useOutsideAlerter} from "../../../hooks/OutsideAlerter";

import './ChatUsers.scss'

import {ChatUsersItem} from "./ChatUsersItem/ChatUsersItem";
import {useStore} from "../../../hooks/store";

export function ChatUsers(props) {
	const {onEdit, onSelect} = props
	const {state} = useStore()

	const {visible, setVisible, ref} = useOutsideAlerter(false)

	const [activeUser, setActiveUser] = useState(null)
	const [valueNode, setValueNode] = useState('')

	useEffect(() => {
		setActiveUser(state.activeUser)
		state.activeUser && setValueNode(state.activeUser.node)
	}, [state.activeUser])

	const online = state.people.filter(o => o.online)
	const offline = state.people.filter(o => !o.online)


	return (
		<div className='chat__users users-chat'>
			{
				<CSSTransition in={visible === true}
											 timeout={300}
											 classNames='popup'
											 unmountOnExit>
					<div className='chat__users-popup chat-users-popup' ref={ref}>
						<div className='chat-users-popup__header'>
							<img
								src={state.activeUser ? state.activeUser.img || 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.vFK3EwPLrvUWNEGCAhfvjwHaHa%26pid%3DApi&f=1' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.vFK3EwPLrvUWNEGCAhfvjwHaHa%26pid%3DApi&f=1'}
								alt="ava"/>
							<span className='chat-users-popup__name'>
						{state.activeUser && state.activeUser.name}
					</span>
						</div>
						<div className='chat-users-popup__body'>
							<span className='chat-users-popup__role-head'>{state.activeUser && state.activeUser.role ? 'Роль' : 'Нет ролей'}</span>
							{state.activeUser && state.activeUser.role && <span className='chat-users-popup__role-body'>{state.activeUser && state.activeUser.role}</span>}
							<span className='chat-users-popup__node-head'>Заметка</span>
							<input className='chat-users-popup__node-body'
										 placeholder='Нажмите чтобы добавить заметку'
										 value={valueNode}
										 onChange={(e) => setValueNode(e.target.value)}
										 onBlur={() => onEdit(state.activeUser.id, valueNode)}/>
							<input className='chat-users-popup__message'
										 placeholder='Введите сообдение'/>
						</div>
					</div>
				</CSSTransition>

			}
			<div className='users-chat__online'>
				<h3>В сети {online.length}</h3>
				{online.map(u => <ChatUsersItem key={u.id} user={u} onSelect={onSelect} openModal={setVisible}/>)}
			</div>
			<div className='users-chat__online'>
				<h3>Вне сети {offline.length}</h3>
				{offline.map(u => <ChatUsersItem key={u.id} user={u} onSelect={onSelect} openModal={setVisible}/>)}
			</div>
		</div>
	)
}
