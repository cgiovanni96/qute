import { api } from '..'

const randomQuote = async (): Promise<any> => {
	const quote: Response = await fetch(api.BASE)

	return quote.json
}

export default randomQuote
