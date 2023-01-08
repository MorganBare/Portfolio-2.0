
import React from 'react';

import { Navigation, Hero, ContactFooter, MobileNavigation } from './components';
import { Theme } from './assets/Styles/Theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './assets/Styles/GlobalStyles';
import './App.css';

function App() {

  const [open, setOpen] = React.useState<boolean>(false);

  return (
      <ThemeProvider theme={Theme}>
        <GlobalStyle/>
        <Navigation/>
        <MobileNavigation open={open} setOpen={setOpen}/>
        <Hero/>
        <ContactFooter/>
      </ThemeProvider>
  );
}

export default App;
