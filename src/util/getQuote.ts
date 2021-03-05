import { RandomQuote } from './types'

const getQuote = (data: any): RandomQuote => {
	return {
		id: data['_id'],
		text: data.quoteText,
		genre: data.quoteGenre,
		author: data.quoteAuthor
	}
}

export default getQuote
