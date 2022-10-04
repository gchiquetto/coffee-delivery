import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }

    :focus{
        outline: none;
        box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']};
    }

    body{
        padding: 0 1rem;
    }
    
    body, input, button, textarea{
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        font-weight: 400;
        background-color: ${(props) => props.theme['off-white']};
    }

    @media (max-width: 620px){
        html{
            font-size: 87.5%;
        }
    }

    @media (max-width: 520px){
        html{
            font-size: 75%;
        }
    }
`
