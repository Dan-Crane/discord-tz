import React from "react";

import './Chat.scss'
import {ChatHeader} from "./ChatHeader/ChatHeader";
import {ChatContent} from "./ChatContent/ChatContent";



export function Chat({}) {
	return (
		<section className='chat'>
			<ChatHeader text='test'/>
			<ChatContent>
			</ChatContent>
		</section>
	)
}
