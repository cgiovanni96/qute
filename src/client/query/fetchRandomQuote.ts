import { api } from '..'
import getQuote from '../../util/getQuote'

const fetchRandomQuote = async (): Promise<any> => {
	const query: Response = await fetch(api.BASE)
	const data: any = await query.json()
	return getQuote(data.data[0])
}

export default fetchRandomQuote
