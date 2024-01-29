import React from "react";
import { Center, WrapItem, Avatar } from "@chakra-ui/react";

const Logo = () => {
    return (
    <Center mt={6}>
        <WrapItem>
            <Avatar size='2xl' name='Segun Adebayo' src='0xgotznit.png' />{' '}
        </WrapItem>
    </Center>
    );
}

export default Logo;