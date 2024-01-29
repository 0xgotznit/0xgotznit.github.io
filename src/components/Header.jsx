// Header.js
import React from "react";
import { Box, Link, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation();

  const cvUrl = 'https://0xgotznit.github.io/ai-git.pdf'; // Replace with your actual CV URL

  return (
    <Box mt={0}>
      <Flex alignItems="center" justifyContent="center" fontSize="xl" fontWeight="bold" color="teal.500">
        <Link mx={2} href="#contact">{t('contact')}</Link>
        <Link mx={2} href={cvUrl} target="_blank" rel="noopener noreferrer">CV</Link>
        <Link mx={2} href="#blog">{t('blog')}</Link>
        <Link mx={2} href="#code">{t('code')}</Link>
        <Link mx={2} href="#books">{t('books')}</Link>
        <Link mx={2} href="#links">{t('links')}</Link>
      </Flex>
    </Box>
  );
}

export default Header;
