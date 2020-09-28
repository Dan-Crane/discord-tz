import React from "react";

import './Chat.scss'
import {ChatHeader} from "./ChatHeader/ChatHeader";

export function Chat({}) {
	return (
		<section className='content'>
			<ChatHeader text='test'/>
		</section>
	)
}
