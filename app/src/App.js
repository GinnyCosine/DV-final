import React from 'react';
import ThemeProvider from './Themes/ThemeProvider';
import Router from './Router';

const App = () => (
  <div className="App">
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  </div>
);

export default App;
