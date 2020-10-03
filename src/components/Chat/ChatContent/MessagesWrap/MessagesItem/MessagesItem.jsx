import React from "react";

import './MessagesItem.scss'

export function MessagesItem({message}) {
	return (
		<div className='messages__item item-message'>
			<img src={message.user.img} alt="avatar" className='item-message__ava'/>
			<div className='item-message__wrap'>
				<span className='item-message__name'>
					{message.user.name}
				</span>
				<span className='item-message__date'>
					{/*{message.date}*/}
				</span>
				<span className='item-message__text'>
					{message.text}
				</span>
			</div>
		</div>
	)
}
