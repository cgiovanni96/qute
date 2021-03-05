import { api } from '..'

export type RandomQuote = {
	id: string
	text: string
	author: string
	genre: string
}

const getRandomQuote = (data: any): RandomQuote => {
	return {
		id: data['_id'],
		text: data.quoteText,
		genre: data.quoteGenre,
		author: data.quoteAuthor
	}
}

const fetchRandomQuote = async (): Promise<any> => {
	const query: Response = await fetch(api.BASE)
	const data: any = await query.json()
	return getRandomQuote(data.data[0])
}

export default fetchRandomQuote
