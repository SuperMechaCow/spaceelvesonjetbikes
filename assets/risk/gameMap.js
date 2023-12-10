var gameMap = {
	regions: [{
			name: 'AA',
			center: {
				x: 115,
				y: 128
			},
			routes: ['AB', 'AE', 'BA', 'CA'],
			occupants: []
		},
		{
			name: 'AB',
			center: {
				x: 50,
				y: 115
			},
			routes: ['AA', 'AC', 'AE', 'BB'],
			occupants: []
		},
		{
			name: 'AC',
			center: {
				x: 62,
				y: 47
			},
			routes: ['AB', 'AD'],
			occupants: []
		},
		{
			name: 'AD',
			center: {
				x: 95,
				y: 32
			},
			routes: ['AB', 'AC', 'AE'],
			occupants: []
		},
		{
			name: 'AE',
			center: {
				x: 120,
				y: 57
			},
			routes: ['AA', 'AB', 'AD', 'DA'],
			occupants: []
		},
		{
			name: 'BA',
			center: {
				x: 120,
				y: 193
			},
			routes: ['BB', 'BC', 'AA', 'CA'],
			occupants: []
		},
		{
			name: 'BB',
			center: {
				x: 61,
				y: 214
			},
			routes: ['BA', 'BC', 'BD', 'AB'],
			occupants: []
		},
		{
			name: 'BC',
			center: {
				x: 144,
				y: 240
			},
			routes: ['BA', 'BB', 'BC', 'BD', 'CA'],
			occupants: []
		},
		{
			name: 'BD',
			center: {
				x: 77,
				y: 267
			},
			routes: ['BB', 'BC'],
			occupants: []
		},
		{
			name: 'CA',
			center: {
				x: 191,
				y: 174
			},
			routes: ['CB', 'CC', 'AA', 'BA', 'BC'],
			occupants: []
		},
		{
			name: 'CB',
			center: {
				x: 237,
				y: 162
			},
			routes: ['CA', 'CC', 'DA'],
			occupants: []
		},
		{
			name: 'CC',
			center: {
				x: 255,
				y: 213
			},
			routes: ['CA', 'CB'],
			occupants: []
		},
		{
			name: 'DA',
			center: {
				x: 217,
				y: 98
			},
			routes: ['AE', 'CB', 'DB'],
			occupants: []
		},
		{
			name: 'DB',
			center: {
				x: 245,
				y: 61
			},
			routes: ['DA'],
			occupants: []
		}
	]
}
