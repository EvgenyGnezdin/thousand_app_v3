import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   *,
    *::before,
    *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    }
    body {
        font-family: "Roboro", sans-serif;
        max-width: 992px;
        margin: 0 auto;
    }
    li {
        text-decoration: none;
    }
`
