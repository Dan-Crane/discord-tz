//

const initialState = {
	id: 0,
	name: 'nameServer',
	users: [],
	rooms: {
		serverId: 0,
		name: 'test room',
		massege: [{}],
	}
}

export const serverReduser = (state = initialState, actions) => {
	switch (actions.type) {
		case 'TEST': {
			return state
		}
		default:
			return state
	}
}


//AC
export const test = 'test'
