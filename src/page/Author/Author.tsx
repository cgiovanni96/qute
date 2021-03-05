import React, { FC } from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components'

const Author: FC = ({}) => {
	const { name } = useParams()
	return (
		<Base>
			<Author>{name}</Author>
		</Base>
	)
}

export default Author

const Base = styled.main``
