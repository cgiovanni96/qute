import React from 'react'
import { QueryClientProvider } from 'react-query'
import { ThemeProvider } from 'styled-components'

import client from './client'
import theme from './theme'
import QuteRouter from './QuteRouter'
import GlobalStyles from './theme/GlobalStyles'

const Root: React.FC = () => {
	return (
		<QueryClientProvider client={client}>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<QuteRouter />
			</ThemeProvider>
		</QueryClientProvider>
	)
}

export default Root
