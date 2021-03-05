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

			<AuthorBox>
				<Author>{quote.author}</Author>

				<Genre>{quote.genre}</Genre>
			</AuthorBox>
		</Base>
	)
}

export default Home

const Base = styled.main`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const QuoteBox = styled.section`
	border-left: 6px solid ${({ theme }) => theme.palette.accent};
	width: 60%;
`

const Quote = styled.div`
	padding: 4rem;
	font-size: ${({ theme }) => theme.typo.size.big};
`

const AuthorBox = styled.section`
	margin-top: 1rem;
	width: 50%;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	transition: all 0.5s ease;

	&:hover {
		background-color: ${({ theme }) => theme.palette.bg.inverse};
		color: ${({ theme }) => theme.palette.text.inverse};
	}
`

const Author = styled.div`
	font-size: ${({ theme }) => theme.typo.size.medium};
	font-weight: ${({ theme }) => theme.typo.weight.bold};
`

const Genre = styled.div`
	font-size: ${({ theme }) => theme.typo.size.small};
	color: ${({ theme }) => theme.palette.text.light};
`
