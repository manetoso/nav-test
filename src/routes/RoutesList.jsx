import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import { About } from '../pages/About';
import { ErrorPage } from '../pages/ErrorPage';
import { Home } from '../pages/Home';
import { Proyects } from '../pages/Proyects';
import { SingleProyect } from '../pages/SingleProyect';

export const RoutesList = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes key={location.pathname} location={location}>
        <Route path='/' errorElement={<ErrorPage />} element={<Home />} />
        <Route path='/about' errorElement={<ErrorPage />} element={<About />} />
        <Route
          path='/proyects'
          errorElement={<ErrorPage />}
          element={<Proyects />}
        >
          <Route path=':proyectId' errorElement={<ErrorPage />} element={<SingleProyect />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
