export const editPerson = (personId, text) => ({
	type: 'EDIT_PERSON',
	payload: {
		text,
		personId
	}
})

export const setActiveUser = (user) => ({
	type: 'SET_ACTIVE_USER',
	payload: {
		user
	}
})

	export const sendMessage = (obj) => ({
		type: 'SEND_MESSAGE',
		payload: {
			obj
		}
	}
)
