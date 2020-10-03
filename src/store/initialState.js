export const initialState = {
	user: null,
	server: [
		{
			id: 1,
			name: 'home',
			rooms: [
				{
					id: 1,
					serverId: 1,
					name: "welcome"
				},
				{
					id: 2,
					serverId: 1,
					name: "test room"
				},
				{
					id: 3,
					serverId: 1,
					name: "Ну че пацаны"
				},

			],
		},
		{
			id: 2,
			name: 'welcome',
		},
		{
			id: 3,
			name: 'работа',
			rooms: [
				{
					id: 4,
					serverId: 3,
					name: "Новенький"
				},
			]
		},
		{
			id: 4,
			name: 'отдых',
		},
	],
	rooms: [
		{
			id: 1,
			serverId: 1,
			name: "welcome"
		},
		{
			id: 2,
			serverId: 1,
			name: "test room"
		},
		{
			id: 3,
			serverId: 1,
			name: "Ну че пацаны"
		},
		{
			id: 4,
			serverId: 3,
			name: "Новенький"
		},

	],
	messages: [
		{
			id: 1,
			roomId: 1,
			userId: 1,
			text: 'Всем привет! тестовый чат. Поехали'
		},
		{
			id: 2,
			roomId: 1,
			userId: 2,
			text: 'Привет всем'
		},
		{
			id: 3,
			roomId: 1,
			userId: 3,
			text: 'о! начинается. Слыхал новенькго хотите взять?'
		},
		{
			id: 4,
			roomId: 1,
			userId: 1,
			text: 'Это в комнате работа обсудим'
		},
		{
			id: 5,
			roomId: 3,
			userId: 2,
			text: 'Ну шо пацаны, по пиву?'
		},
		{
			id: 6,
			roomId: 3,
			userId: 1,
			text: 'Антон, придерживайтесь корпаротивной этики'
		},
		{
			id: 7,
			roomId: 3,
			userId: 5,
			text: 'Ой, антон как всегда...😒'
		},
	],
	people: [
		{
			id: 1,
			name: 'Дмитрий',
			status: 'Работа прежде всего!',
			role: 'Админ',
			node: 'Тут будет заметка',
			img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.5l6NuHjFQzKcVPhPys9XrgHaHa%26pid%3DApi&f=1'
		},
		{
			id: 2,
			name: 'Anton',
			status: 'Отдых ван лаф!',
			role: 'тестировщик',
			node: 'Тут будет заметка',
			img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.lLNTTZyUEASliSpFe7qLUgHaHa%26pid%3DApi&f=1'
		},
		{
			id: 3,
			name: 'Gerald',
			status: 'Трудяга работяга!',
			role: 'Hunter',
			node: 'Тут будет заметка',
			img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.UPjIS3BJIb18IZPFPdmjpQHaHa%26pid%3DApi&f=1'
		},
		{
			id: 4,
			name: 'Саша',
			status: 'Творчество в каждом из нас',
			role: 'HR manager',
			node: '',
			img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MR40vakaaJi1AOgAE0mMgAHaHa%26pid%3DApi&f=1'
		},
		{
			id: 5,
			name: 'Юля',
			status: 'Сложный подросток',
			role: 'Тестировщик',
			node: '',
			img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.QGHhEaTTjwiDInIQ4NvnYQHaHa%26pid%3DApi&f=1'
		},
	],
}
