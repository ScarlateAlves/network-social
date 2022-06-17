import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;

  }
  h1, h2, h3, p {
    margin: 0;
  }
  ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
  }


  img {
    display: block;
    max-width: 100%;
  }

  button, input {
    display: block;
    font-size: 1rem;
  }
  max-width: 55rem;
  padding: 0 1rem;

`

export const theme = {
  colors: {
    primary: '#0070f3',
  },
}
