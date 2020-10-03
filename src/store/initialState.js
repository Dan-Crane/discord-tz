export const initialState = {
	user: null,
	server: [
		{
			id: 1,
			name: 'home',
		}
	],
	rooms: [
		{
			id: 1,
			serverId: 1,
			name: "welcome"
		}
	],
	messages: [
		{
			id: 1,
			roomId: 1,
			messages: [
				{
					user: null,
					text: 'test'
				}
			]
		},
	],
	people: [
		{
			id: 1,
			name: 'Dima',
			status: 'Работа прежде всего!',
			role: 'Админ',
			node: 'Тут будет заметка'
		},
	],
}
