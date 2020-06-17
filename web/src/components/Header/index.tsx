import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { FiMoon, FiSun } from 'react-icons/fi';

import { Container, ThemeButton } from './styles';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);

  return (
    <Container>
      <span>DRAG AND DROP TEST</span>
      <ThemeButton onClick={toggleTheme}>
        { title === 'light' ? (<FiMoon color='#F5EFFF' size='20rem' />) : (<FiSun color='#F5EFFF' size='20rem' />) }
      </ThemeButton>
    </Container>
  )
}

export default Header;