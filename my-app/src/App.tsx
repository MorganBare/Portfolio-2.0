import React from 'react';

import { Navigation, Hero, ContactFooter } from './components';
import { Theme } from './assets/Styles/Theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './assets/Styles/GlobalStyles';

function App() {
  return (

    <ThemeProvider theme={Theme}>
      <GlobalStyle/>
      <Navigation/>
      <Hero/>
      <ContactFooter/>
    </ThemeProvider>

  );
}

export default App;
