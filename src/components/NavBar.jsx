// Header.js
import React from "react";
import { Box, Link, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
    const { t } = useTranslation();

  const cvUrl = 'https://0xgotznit.github.io/ai-git.pdf';
  const blogMediumUrl = 'https://medium.com/@0xgotznit'
    const githubUrl = 'https://github.com/0xgotznit'
    const watchListUrl = 'https://0xgotznit.notion.site/Watchlist-1ac2403c0be74b529f2d3a1038729f71?pvs=4';
    const roadmapUrl = 'https://0xgotznit.notion.site/7e1bd99c7d68493dae1b32f1368b39a6?v=284d2b6a264f43458a03eb78cf216540&pvs=4'

  return (
    <Box mt={0}>
      <Flex alignItems="center" justifyContent="center" fontSize="xl" fontWeight="bold" color="teal.500">
        <Link mx={2} href="#contact">{t('contact')}</Link>
        <Link mx={2} href={cvUrl} target="_blank" rel="noopener noreferrer">CV</Link>
        <Link mx={2} href={blogMediumUrl}>{t('blog')}</Link>
        <Link mx={2} href={githubUrl}>{t('code')}</Link>
        <Link mx={2} href={watchListUrl}>{t('watchlist')}</Link>
        <Link mx={2} href={roadmapUrl}>{t('roadmap')}</Link>
      </Flex>
    </Box>
  );
}

export default NavBar;
