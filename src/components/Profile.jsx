import React from 'react';
import {Box, Center, Heading, ListItem, Text, UnorderedList, VStack} from '@chakra-ui/react';
import {useTranslation} from "react-i18next";

const Profile = () => {

    const {t} = useTranslation();


    return (
        <Box mt={2} p={6} borderWidth={1} borderRadius="lg" shadow="lg" bg="black" color="white"
             maxW={['99%', '99%', '90%', '85%', '80%']} mx="auto">
            <Heading as="h2" fontSize="2xl" mb={4}>
                {t('software_engineer')}
            </Heading>
            <Text fontSize="md" mb={4} fontFamily="Roboto, sans-serif" lineHeight="tall">
                <strong>{t('who_loves_go_rust')}</strong> {t('passion_memory_management')}
            </Text>
            <Text fontSize="md" mb={4} fontFamily="Roboto, sans-serif" lineHeight="tall">
                {t('more_about_me')}
            </Text>
            <Text fontSize="md" mb={4} fontFamily="Roboto, sans-serif" lineHeight="tall">
                {t('open_source_playground')}
            </Text>
            <VStack alignItems="start" spacing={2}>
                <Heading as="h3" fontSize="lg">
                    {t('fun_bytes')}
                </Heading>
                <UnorderedList>
                    <ListItem>{t('list_memory_management')}</ListItem>
                    <ListItem>{t('list_blockchain_believer')}</ListItem>
                    <ListItem>{t('list_fluent_go_rust')}</ListItem>
                    <ListItem>{t('list_graduated_software_engineering')}</ListItem>
                    <ListItem>{t('list_anime_enthusiast')}</ListItem>
                </UnorderedList>
            </VStack>
            <Center mt={4}>
                <Text fontSize="lg" fontWeight="bold" color="teal.500">
                    {t('dive_deeper')}
                </Text>
            </Center>
        </Box>
    );
}

export default Profile;