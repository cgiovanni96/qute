import React, { FC } from 'react'
import styled from 'styled-components'

interface QuoteProps {
	text: string
}

const Quote: FC<QuoteProps> = ({ text }) => {
	return (
		<QuoteBox>
			<Text> {text} </Text>
		</QuoteBox>
	)
}

export default Quote

const QuoteBox = styled.section`
	border-left: 6px solid ${({ theme }) => theme.palette.accent};
	width: 60%;
`

const Text = styled.div`
	padding: 4rem;
	font-size: ${({ theme }) => theme.typo.size.big};
`
