import * as React from 'react';
import { BrowserRouter, createBrowserRouter } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Proyects } from './pages/Proyects';
import { ErrorPage } from './pages/ErrorPage';
import { RoutesList } from './routes/RoutesList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/proyects',
        element: <Proyects />,
      },
    ],
  },
]);

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <RoutesList />
        <Navbar />
      </BrowserRouter>
    </ChakraProvider>
  );
};
