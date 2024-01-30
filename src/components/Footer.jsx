import React from "react";
import Copyright from "./Copyright";
import Social from "./Social";
import { Center } from '@chakra-ui/react';

const Footer = () => {
  return (
    <footer>
      <Center mt={9}>
        <Social />
      </Center>
      <Copyright />
    </footer>
  );
};

export default Footer;