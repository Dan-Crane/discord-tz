import React, {useEffect, useRef, useState} from "react";

import './ChatForm.scss'

export function ChatForm({}) {
	const [value, setValue] = useState('')
	const ref = useRef(null)
	let oldHeight = +document.activeElement.scrollHeight
	let newHeight


	useEffect(() => {
		oldHeight = ref.current.scrollHeight
		console.log(oldHeight);
		console.log(ref.current.scrollHeight);

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
		<form className='chat__form form-chat'>

			<textarea ref={ref}
								className='form-chat__textarea'
								value={value}
								onChange={(e) => setValue(e.target.value)}>
			</textarea>
		</form>
	)
}
