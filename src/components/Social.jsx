import React from "react";
import { Flex, Link, Icon } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaMedium, FaStackOverflow } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Social = () => {
    return (
        <Flex justifyContent="center" alignItems="center" color="white">
            <Link href="https://github.com/0xgotznit" isExternal mx={2}>
                <Icon as={FaGithub} w={6} h={6} />
            </Link>
            <Link href="https://x.com/0xgotznit" isExternal mx={2}>
                <Icon as={FaXTwitter} w={6} h={6} />
            </Link>
            <Link href="https://linkedin.com/in/AyoubIdel" isExternal mx={2}>
                <Icon as={FaLinkedin} w={6} h={6} />
            </Link>
            <Link href="https://medium.com/@0xgotznit" isExternal mx={2}>
                <Icon as={FaMedium} w={6} h={6} />
            </Link>
            <Link href="https://stackoverflow.com/users/9599197/0xgotznit" isExternal mx={2}>
                <Icon as={FaStackOverflow} w={6} h={6} />
            </Link>
        </Flex>
    );
};

export default Social;
