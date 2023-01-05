

import { Navigation, Hero, ContactFooter, MobileNavigation } from './components';
import { Theme } from './assets/Styles/Theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './assets/Styles/GlobalStyles';
import './App.css';

function App() {
  return (

    <ThemeProvider theme={Theme}>
      <GlobalStyle/>
      <Navigation/>
      <MobileNavigation/>
      <Hero/>
      <ContactFooter/>
    </ThemeProvider>

  );
}

export default App;
