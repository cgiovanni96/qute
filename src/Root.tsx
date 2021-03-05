import React from 'react'
import { ThemeProvider } from 'styled-components'
import QuteRouter from './QuteRouter'
import theme from './theme'
import GlobalStyles from './theme/GlobalStyles'

const Root: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<QuteRouter />
		</ThemeProvider>
	)
}

export default Root
