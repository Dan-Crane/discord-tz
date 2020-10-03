import React from "react";
import {Route, Switch, useParams} from "react-router-dom";

import './Chat.scss'
import {ChatHeader} from "./ChatHeader/ChatHeader";
import {ChatContent} from "./ChatContent/ChatContent";
import {ChatUsers} from "./ChatUsers/ChatUsers";
import {useStore} from "../../hooks/store";


export function Chat() {

	return (
		<section className='chat'>
			<ChatHeader text='test'/>

			<Switch>
				<Route path="/room/:id">
					<ChatContent/>
				</Route>
				<Route>
					<h1 className='chat__warning'>Выберите комнату</h1>
				</Route>
			</Switch>

			<ChatUsers/>
		</section>
	)
}
