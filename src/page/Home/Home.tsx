import React, { FC } from 'react'
import { useQuery } from 'react-query'
import styled from 'styled-components'
import fetchRandomQuote, {
	RandomQuote
} from '../../client/query/fetchRandomQuote'

const Home: FC = ({}) => {
	const { isLoading, error, data: quote } = useQuery<RandomQuote, Error>(
		'randomQuote',
		() => fetchRandomQuote()
	)

	if (isLoading) return <Base> Loading</Base>
	if (error || !quote) return <Base> Something went wrong</Base>

	return (
		<Base>
			<QuoteBox>
				<Quote> {quote.text} </Quote>
			</QuoteBox>
		</Base>
	)
}

export default Home

const Base = styled.main`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
`

const QuoteBox = styled.section`
	border-left: 6px solid ${({ theme }) => theme.palette.accent};
	width: 60%;
`

const Quote = styled.div`
	padding: 3rem;
	font-size: ${({ theme }) => theme.typo.size.big};
`
