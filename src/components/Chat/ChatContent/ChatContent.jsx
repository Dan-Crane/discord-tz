import React from "react";

import {useStore} from "../../../hooks/store";
import {useParams} from "react-router-dom";

import './ChatContent.scss'
import {MessagesWrap} from "./MessagesWrap/MessagesWrap";
import {MessagesItem} from "./MessagesWrap/MessagesItem/MessagesItem";
import {ChatForm} from "./ChatForm/ChatForm";

const test = [
	{
		id: 1,
		message: 'test 1',
		user:
			{
				id: 1,
				name: 'Dima',
				img: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Favatarbox.net%2Favatars%2Fimg33%2Fstewie_raygun_avatar_picture_60581.gif&f=1&nofb=1'
			},
	},
	{
		id: 2,
		message: 'test 2',
		user:
			{
				id: 1,
				name: 'Test',
				img: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Favatarbox.net%2Favatars%2Fimg33%2Fstewie_raygun_avatar_picture_60581.gif&f=1&nofb=1'
			},
	},
	{
		id: 3,
		message: 'test 3',
		user:
			{
				id: 1,
				name: 'Test',
				img: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Favatarbox.net%2Favatars%2Fimg33%2Fstewie_raygun_avatar_picture_60581.gif&f=1&nofb=1'
			},
	},
	{
		id: 4,
		message: 'test 4',
		user:
			{
				id: 1,
				name: 'Test',
				img: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Favatarbox.net%2Favatars%2Fimg33%2Fstewie_raygun_avatar_picture_60581.gif&f=1&nofb=1'
			},
	},
]

export function ChatContent( props ) {
	const { messages } = props

	const {state} = useStore()

	let { id } = useParams()
	let messageArr = state.messages.filter(m=> m.roomId === +id)
	let messagesAndUsers = messageArr.map(m => ({...m, user: state.people.find(p=> p.id === m.userId)}))
	console.log(messagesAndUsers );


	return (
		<div className='chat__content'>
			<MessagesWrap>
				{messagesAndUsers && messagesAndUsers.map(m=> <MessagesItem key={m.id} message={m}/>)}
			</MessagesWrap>

			<ChatForm>

			</ChatForm>
		</div>
	)
}
