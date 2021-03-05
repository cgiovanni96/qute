import { QueryClient } from 'react-query'

const client = new QueryClient()
export default client

type ApiType = {
	BASE: string
	QUOTES: string
}

export const api: ApiType = {
	BASE: 'https://quote-garden.herokuapp.com/api/v3/quotes/random',
	QUOTES: 'https://quote-garden.herokuapp.com/api/v3/quotes'
}
