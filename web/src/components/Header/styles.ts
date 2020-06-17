import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 30px;

  background: ${props => props.theme.colors.primary};
  color: #F5EFFF;
  font-size: 16rem;
  font-weight: 700;
  box-shadow: 0px 0px 10px #333;

  span {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                          supported by Chrome, Edge, Opera and Firefox */
  }
`;

export const ThemeButton = styled.span`
  cursor: pointer;
`;