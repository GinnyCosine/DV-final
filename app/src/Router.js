import React, { Component } from 'react';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';

import Header from './Components/Header';
import Navbar from './Components/Navbar';
import BackToTop from './Components/BackToTop';
import Footer from './Components/Footer';
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';


class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header/>
        <Navbar/>
        <Routes>
          <Route path="/page1" element={<Page1/>} />
          <Route path="/page2" element={<Page2/>} />
          {/* No match route */}
          <Route path="*" element={<Page1/>} />
        </Routes>
        <Footer/>
        <BackToTop/>
      </BrowserRouter>
    );
  }
}

export default Router;
