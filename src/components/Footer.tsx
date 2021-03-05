import React from 'react'
import styled from 'styled-components'

const Footer: React.FC = () => {
	return (
		<Base>
			<Text>created by Giovanni Costa</Text>
		</Base>
	)
}

export default Footer

const Base = styled.footer`
	display: flex;
	justify-content: center;
`

const Text = styled.span`
	font-size: ${({ theme }) => theme.typo.size.small};
`
