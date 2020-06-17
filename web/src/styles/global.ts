import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }
  
  html {
    font-size: 6.25%;
  }

  body {
    font-size: 14rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;

    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }
`;