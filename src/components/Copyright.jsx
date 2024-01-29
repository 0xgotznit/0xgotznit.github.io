import React from "react";
import { Text, Box, Flex, Icon } from "@chakra-ui/react";
import { FaHeart } from 'react-icons/fa';

const Copyright = () => {

  const year = new Date().getFullYear();

  return (
    <Box textAlign="center" py={4} mt={2}>
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Text fontSize="sm" color="gray.500">
          Done with <Icon as={FaHeart} color="red.500" mx="1" /> by 0xgotznit
        </Text>
        <Text fontSize="sm" color="gray.500" mt="2">
          © {year} 0xgotznit. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};

export default Copyright;
