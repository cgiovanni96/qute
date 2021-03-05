import { api } from '..'
import getQuote from '../../util/getQuote'

const fetchAuthorQuotes = async (
	authorName: string,
	limit = 3
): Promise<any> => {
	const query = await fetch(api.QUOTES + `?author=${authorName}&limit=${limit}`)

	const data = await query.json()

	console.log('DATA', data.data)

	const quotes = data.data.map((quote: any) => {
		return getQuote(quote)
	})

	return quotes
}

export default fetchAuthorQuotes
