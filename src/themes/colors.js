// https://www.css-gradient.com/

const Colors = {
	white: '#fff',
	black: '#1f202f',
	lightGrey: '#ececec',
	darkGrey: '#a9b0b3',
	pink: '#d5224e',
	lightBlue: '#28bcf0',

	shadow: 'rgba(0,0,0,0.26)',
	gradient: {
		pink: 'linear-gradient(to bottom, #db3463, #d92a47);',
		warm: 'linear-gradient(to left, #ff7e5f, #feb47b);',
		cool: 'linear-gradient(to right, #00c6ff, #2580ef);'
	},
	moveCategories: {
		physical: '#da574a',
		status: '#454550',
		special: '#72a7c2'
	},
	types: {
		normal: (alpha=1.0) => {
			return `rgba( 178, 179, 169, ${alpha})`
		},
		fire: (alpha=1.0) => {
			return `rgba( 246, 97, 79, ${alpha})`
		},
		water: (alpha=1.0) => {
			return `rgba( 0, 204, 255, ${alpha})`
		},
		electric: (alpha=1.0) => {
			return `rgba( 242, 205, 60, ${alpha})`
		},
		grass: (alpha=1.0) => {
			return `rgba( 113, 188, 120, ${alpha})`
		},
		ice: (alpha=1.0) => {
			return `rgba( 164, 244, 249, ${alpha})`
		},
		fighting: (alpha=1.0) => {
			return `rgba( 192, 21, 21, ${alpha})`
		},
		poison: (alpha=1.0) => {
			return `rgba( 138, 73, 107, ${alpha})`
		},
		ground: (alpha=1.0) => {
			return `rgba( 166, 123, 91, ${alpha})`
		},
		flying: (alpha=1.0) => {
			return `rgba( 206, 200, 239, ${alpha})`
		},
		psychic: (alpha=1.0) => {
			return `rgba( 222, 111, 161, ${alpha})`
		},
		bug: (alpha=1.0) => {
			return `rgba( 208, 206, 28, ${alpha})`
		},
		rock: (alpha=1.0) => {
			return `rgba( 139, 69, 19, ${alpha})`
		},
		ghost: (alpha=1.0) => {
			return `rgba( 150, 120, 182, ${alpha})`
		},
		dragon: (alpha=1.0) => {
			return `rgba( 15, 77, 146, ${alpha})`
		},
		dark: (alpha=1.0) => {
			return `rgba( 28, 40, 65, ${alpha})`
		},
		steel: (alpha=1.0) => {
			return `rgba( 162, 173, 208, ${alpha})`
		},
		fairy: (alpha=1.0) => {
			return `rgba( 255, 192, 203, ${alpha})`
		},
	},

}

export default Colors;
