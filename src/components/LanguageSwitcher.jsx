import React from 'react';
import { useTranslation } from 'react-i18next';
import { Flex } from '@chakra-ui/react';
import { FlagIcon } from "react-flag-kit";

const LanguageSwitcher = () =>  {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const nextLanguage = i18n.language === 'en' ? 'fr' : 'en';
  const nextFlagCode = nextLanguage === 'en' ? 'US' : 'FR';

  return (
    <>
      <Flex position="fixed" top="1rem" right="1rem" cursor="pointer">
        <FlagIcon code={nextFlagCode} size={24} onClick={() => changeLanguage(nextLanguage)} />
      </Flex>
    </>
  );
}

export default LanguageSwitcher;
