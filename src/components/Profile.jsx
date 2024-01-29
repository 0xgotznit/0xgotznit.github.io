// Profile.js
import React from 'react';
import { Box, Text, Heading, VStack, Center, UnorderedList, ListItem } from '@chakra-ui/react';

const Profile = () => {


  return (
    <Box mt={2} p={6} borderWidth={1} borderRadius="lg" shadow="lg" bg="black" color="white" maxW={['99%', '99%', '700px']} mx="auto">
      <Heading as="h2" fontSize="2xl" mb={4}>
        About Me
      </Heading>
      <Text fontSize="lg" mb={4}>
       
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor, turpis nec
        fringilla hendrerit, felis nisi venenatis quam, a interdum velit metus quis justo.
        Integer eget lectus id enim auctor congue.
        <br />
        
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor, turpis nec
        fringilla hendrerit, felis nisi venenatis quam, a interdum velit metus quis justo.
        Integer eget lectus id enim auctor congue.
      </Text>
      <VStack alignItems="start" spacing={2}>
        <Heading as="h3" fontSize="lg">
          <span role="img" aria-label="English Flag" style={{ marginRight: '8px' }}>
            🇬🇧
          </span>
          What I Did (English):
        </Heading>
        <UnorderedList>
          <ListItem>Designed user-friendly websites</ListItem>
          <ListItem>Developed responsive web applications</ListItem>
          <ListItem>Collaborated with cross-functional teams</ListItem>
          <ListItem>Implemented SEO best practices</ListItem>
        </UnorderedList>
      </VStack>
      <Center mt={4}>
        <Text fontSize="lg" fontWeight="bold" color="teal.500">
          Learn more about me
        </Text>
      </Center>
    </Box>
  );
}

export default Profile;
