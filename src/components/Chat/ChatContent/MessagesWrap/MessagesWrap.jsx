import React from "react";

import './MessagesWrap.scss'

export function MessagesWrap({ children }) {
	return (
		<div className='chat__messages messages-wrap'>
			{children}
		</div>
	)
}
