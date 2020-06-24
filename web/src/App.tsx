import React from 'react';
import { ThemeProvider } from 'styled-components';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import usePersistedState from './utils/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  const [theme, setTheme] = usePersistedState<string>('theme', 'light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <ThemeProvider theme={theme === 'light' ? light : dark}>
        <div className="App">
          <Header toggleTheme={toggleTheme} />
          <Home />

          <GlobalStyle />
        </div>
      </ThemeProvider>
    </DndProvider>
  );
}

export default App;
