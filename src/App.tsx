import React, {useState} from 'react';
import Header from './components/header';
import GlobalStyle from '../src/styles/global'
import {ThemeProvider} from 'styled-components'
import light from './styles/themes/light';
import dark from './styles/themes/dark'

function App() {
  const [theme, setTheme] = useState(dark);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };



  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
    </div>
    </ThemeProvider>
  );
}

export default App;
