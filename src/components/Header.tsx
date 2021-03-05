import React, { FC } from 'react'
import styled from 'styled-components'

const Header: FC = ({}) => {
	return (
		<Base>
			<Title>random</Title>
		</Base>
	)
}

export default Header

const Base = styled.header`
	margin-top: 2rem;
	/* flex: 1; */
	display: flex;
	justify-content: flex-end;
`

const Title = styled.span`
	font-size: 14px;
	color: #4f4f4f;
`
