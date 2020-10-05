export const reducer = (state, action) => {
	switch (action.type) {
		case 'EDIT_PERSON':
			return {
				...state,
				people: state.people.map(p => p.id === action.payload.personId ? {...p, node: action.payload.text} : p)
			}
			case 'SET_ACTIVE_USER':
			return {
				...state,
				activeUser: action.payload.user
			}
		case 'SEND_MESSAGE':
			return {
				...state,
				messages: [...state.messages, action.payload.obj]
			}
		default:
			return state
	}
}
