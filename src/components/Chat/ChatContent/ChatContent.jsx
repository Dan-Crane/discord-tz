import React, {useEffect, useRef} from "react";

import {CSSTransition, TransitionGroup} from "react-transition-group";
import {useStore} from "../../../hooks/store";
import {useParams} from "react-router-dom";

import './ChatContent.scss'

import {MessagesWrap} from "./MessagesWrap/MessagesWrap";
import {MessagesItem} from "./MessagesWrap/MessagesItem/MessagesItem";
import {ChatForm} from "./ChatForm/ChatForm";

export function ChatContent(props) {
	const {messages, onMessage} = props
	const ref = useRef()

	const {state} = useStore()

	let {id} = useParams()
	let messageArr = state.messages.filter(m => m.roomId === +id)
	let messagesAndUsers = messageArr.map(m => ({...m, user: state.people.find(p => p.id === m.userId)}))

	function scroll() {
		ref.current.scrollIntoView({behavior: "smooth"});
	}

	useEffect(() => {
		scroll()
	}, [messagesAndUsers.length])

	return (
		<div className='chat__content'>
			<MessagesWrap>
				{messagesAndUsers.length > 0
					? <TransitionGroup>
						{messagesAndUsers.map(m => (
							<CSSTransition key={m.id}
														 timeout={300}
														 classNames="item"
														 mountOnEnter>
								<MessagesItem message={m}/>
							</CSSTransition>
						))}
					</TransitionGroup>
					: <h3 className='messages-wrap__title'>Будте первыми</h3>}
				<div className='chat__scroll' ref={ref}/>
			</MessagesWrap>
			<ChatForm onMessage={onMessage} roomId={id}/>
		</div>
	)
}
