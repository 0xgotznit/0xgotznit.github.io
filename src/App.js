import React from 'react';
import {Center} from '@chakra-ui/react';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Logo from './components/Logo'
import GreetingTitle from './components/GreetingTitle'
import LanguageSwitcher from './components/LanguageSwitcher';
import './i18n';

function App() {


    return (
        <div className="App" style={{marginTop: '20px'}}>
            <LanguageSwitcher/>
            <Logo/>
            <GreetingTitle/>
            <Center mt={4} width="100%">
                <NavBar/>
            </Center>
            <Center mt={2}>
                <Profile/>
            </Center>
            <Footer/>
        </div>
    );
}

export default App;