import React, { FC } from 'react'
import { useQuery } from 'react-query'
import { Link as RouterLink } from 'react-router-dom'
import styled from 'styled-components'
import fetchRandomQuote from '../../client/query/fetchRandomQuote'
import Quote from '../../components/Quote'
import getAuthorRoute from '../../util/getAuthorRoute'
import { RandomQuote } from '../../util/types'

const Home: FC = ({}) => {
	const { isLoading, error, data: quote } = useQuery<RandomQuote, Error>(
		'randomQuote',
		() => fetchRandomQuote()
	)

	if (isLoading) return <Base> Loading</Base>
	if (error || !quote) return <Base> Something went wrong</Base>

	return (
		<Base>
			<Quote text={quote.text} />

			<AuthorBox>
				<Author>
					<RouterLink to={`/author/${getAuthorRoute(quote.author)}`}>
						{quote.author}
					</RouterLink>
				</Author>

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

	& a {
		color: inherit;
		text-decoration: none;
	}
`

const Genre = styled.div`
	font-size: ${({ theme }) => theme.typo.size.small};
	color: ${({ theme }) => theme.palette.text.light};
`
