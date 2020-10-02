import React from "react";
import {Route, Switch} from "react-router-dom";

import './Chat.scss'
import {ChatHeader} from "./ChatHeader/ChatHeader";
import {ChatContent} from "./ChatContent/ChatContent";
import {ChatUsers} from "./ChatUsers/ChatUsers";


export function Chat() {
	return (
		<section className='chat'>
			<ChatHeader text='test'/>

			<Switch>
				<Route path="/room/:id?">
					<ChatContent/>
				</Route>
				<Route>
					<h1 className='chat__warning'>Выберите комнату</h1>
				</Route>
			</Switch>

			<ChatUsers users={[{
				name: 'Dima',
				img: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.goldtalk.com%2Fforum%2Fimages%2Favatars%2Fall%2Famusing%2F80x80_garfield0005.jpg&f=1&nofb=1',
				status: 'test status',
				id: 1
			}]}/>
		</section>
	)
}
