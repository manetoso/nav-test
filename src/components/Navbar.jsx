import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Link, Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  return (
    <>
      {/* <AnimatePresence mode='wait'>
        <Outlet />
      </AnimatePresence> */}
      <Flex
        zIndex={99}
        position='fixed'
        bottom='2rem'
        left={0}
        justifyContent='center'
        w='100vw'>
        <Flex
          bg='blackAlpha.600'
          gap='2rem'
          color='white'
          px='1.5rem'
          py='0.75rem'
          rounded='lg'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/proyects'>Proyects</Link>
        </Flex>
      </Flex>
    </>
  );
};
