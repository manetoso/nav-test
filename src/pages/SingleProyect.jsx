import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { Heading } from '@chakra-ui/react';

export const SingleProyect = () => {
  const { proyectId } = useParams();
  return (
      <Heading>Proyect No. {proyectId}</Heading>
  );
};
