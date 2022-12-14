import React from 'react';
import ThemeProvider from './Themes/ThemeProvider';
import Page1 from './Components/Page1';

const App = () => (
  <div className="App">
    <ThemeProvider>
      <Page1 />
    </ThemeProvider>
  </div>
);

export default App;
