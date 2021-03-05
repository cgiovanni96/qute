import React, { FC } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import styled from 'styled-components'
import fetchAuthorQuotes from '../../client/query/fetchAuthorQuotes'
import Quote from '../../components/Quote'
import getAuthorRoute from '../../util/getAuthorRoute'
import { RandomQuote } from '../../util/types'

const Author: FC = ({}) => {
	const { name } = useParams()

	const { isLoading, error, data: quotes } = useQuery<RandomQuote[]>(
		'authorQuotes',
		() => fetchAuthorQuotes(getAuthorRoute(name))
	)

	if (isLoading) return <Base>Loading...</Base>
	if (error || !quotes) return <Base>Error</Base>

	return (
		<Base>
			<Name>{name}</Name>

			<QuotesList>
				{quotes.map((quote) => (
					<Quote key={quote.id} text={quote.text} />
				))}
			</QuotesList>
		</Base>
	)
}

export default Author

const Base = styled.main`
	flex: 1;
	width: 80%;
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	/* align-items: center; */
`

const Name = styled.h1`
	font-size: ${({ theme }) => theme.typo.size.big};
	font-weight: ${({ theme }) => theme.typo.weight.bold};
`

const QuotesList = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;

	& > * {
		margin-top: 3rem;
	}
`
