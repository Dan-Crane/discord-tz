import React from "react";
import {Route, Switch} from "react-router-dom";

import './Chat.scss'
import {ChatHeader} from "./ChatHeader/ChatHeader";
import {ChatContent} from "./ChatContent/ChatContent";
import {ChatUsers} from "./ChatUsers/ChatUsers";
import {useStore} from "../../hooks/store";

export function Chat() {
	const {state, actions} = useStore()

	const handleEditNode = (personId, text) => {
		actions.editPerson(personId, text)
	}

	const selectUser = (user) => {
		actions.setActiveUser(user)
	}

	const handleMessage = (roomId, userId, text) => {
		actions.sendMessage({
			id: Math.random().toString(36).substr(2, 9),
			roomId,
			userId,
			text
		})
	}

	return (
		<section className='chat'>
			<ChatHeader text='test'/>
			<Switch>
				<Route path="/room/:id">
					<ChatContent onMessage={handleMessage}/>
				</Route>
				<Route path='/'>
					<h1 className='chat__warning'>Выберите комнату</h1>
				</Route>
			</Switch>
			<ChatUsers onEdit={handleEditNode} onSelect={selectUser}/>
		</section>
	)
}
