import React, { FC } from 'react'
import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

const Header: FC = ({}) => {
	return (
		<Base>
			<Title>
				<RouterLink to={'/'}>random</RouterLink>
			</Title>
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

	& a {
		color: inherit;
		text-decoration: none;
	}
`
