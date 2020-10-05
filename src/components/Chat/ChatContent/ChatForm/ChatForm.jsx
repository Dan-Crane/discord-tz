import React, {useEffect, useRef, useState} from "react";
import {useStore} from "../../../../hooks/store";

import './ChatForm.scss'

export function ChatForm(prors) {
	const {onMessage, roomId} = prors

	const {state} = useStore()
	const [value, setValue] = useState('')
	const ref = useRef(null)
	let oldHeight = +document.activeElement.scrollHeight
	let newHeight


	useEffect(() => {
		oldHeight = ref.current.scrollHeight

		ref.current.style.height = 'auto';
		newHeight = +ref.current.scrollHeight

		if (newHeight > oldHeight) {
			ref.current.style.height = oldHeight + 'px'
		} else {
			ref.current.style.height = newHeight + 'px'
			oldHeight = ref.current.scrollHeight
		}
	}, [oldHeight])


	return (
		<form className='chat__form form-chat' onSubmit={(e) => {
			e.preventDefault()
			if (value.length === 0) return

			onMessage(+roomId, state.user.id, value)
			setValue('')
		}}>
			<input ref={ref}
						 className='form-chat__textarea'
						 value={value}
						 onChange={(e) => setValue(e.target.value)}>
			</input>
		</form>
	)
}
