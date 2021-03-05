import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		palette: {
			bg: {
				default: string
				inverse: string
			}
			accent: string
			text: {
				default: string
				inverse: string
				light: string
			}
		}
		typo: {
			family: string
			size: {
				big: string
				medium: string
				small: string
			}
			weight: {
				default: number
				bold: number
			}
		}
	}
}
