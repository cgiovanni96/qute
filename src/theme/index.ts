import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
	palette: {
		bg: {
			default: '#FFF',
			inverse: '#333'
		},
		accent: '#F7DF94',
		text: {
			default: '#000',
			inverse: '#FFF',
			light: '#828282'
		}
	},

	typo: {
		family: "'Raleway', sans-serif",
		size: {
			big: '36px',
			medium: '24px',
			small: '14px'
		},
		weight: {
			default: 400,
			bold: 700
		}
	}
}

export default theme
