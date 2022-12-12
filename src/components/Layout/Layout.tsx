import React from 'react';
import { Outlet } from 'react-router-dom';
import { ScrollToTop } from '../core';
import Navigation from '../core/Navigation';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
  return (
    <>
      <Header />
      <Navigation />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>

  )
}

export default Layout