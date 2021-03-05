import { up } from 'styled-breakpoints'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
    ${reset}

    html * {
        box-sizing: border-box;
    }

    body {
        display: flex;
        flex-direction: column;
        background: ${({ theme }) => theme.palette.bg.defautl};
        color: ${({ theme }) => theme.palette.text.default};
        font-family: ${({ theme }) => theme.typo.family};
        font-size: ${({ theme }) => theme.typo.size.medium};

        ${up('sm')} {
            width: 80%;
            margin: auto;
        }
    }
`

export default GlobalStyles
