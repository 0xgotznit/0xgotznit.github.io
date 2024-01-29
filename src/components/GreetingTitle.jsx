import React from "react";
import { Text, Heading, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const GreetingTitle = () => {

    const { t } = useTranslation();


    return (
        <Flex alignItems="center" flexDirection="column">
        <Flex alignItems="baseline" mt={2}>
          <Text fontSize="2xl" color="gray.400">
            {t('hi')} 
          </Text>
          <Heading fontSize="6xl" ml={2} fontWeight="bold" color="gray.100">
            Ayoub Idel
          </Heading>
        </Flex>
      </Flex>
    );
}

export default GreetingTitle;