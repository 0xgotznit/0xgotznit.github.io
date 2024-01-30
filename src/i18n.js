import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translations
const resources = {
    en: {
        translation: {
            'hi': 'Hi 👋🏻, I\'m',
            'contact': 'Contact',
            'cv': 'CV',
            'blog': 'Blog',
            'code': 'Code',
            'watchlist': 'Watchlist',
            'roadmap': 'Roadmap',

            'software_engineer': 'Software Engineer',
            'who_loves_go_rust': 'Who\'s equally in love with Go and Rust.',
            'passion_memory_management': 'My passion lies in unraveling the mysteries of memory management - a big shoutout to Rust for that! - and diving into the exhilarating world of multithreading and multiprocessing. Thanks to Go, it\'s like having superpowers but in the coding world!',
            'more_about_me': 'But wait, there\'s more! I\'m also an ardent explorer of blockchain technology, constantly amazed by its endless possibilities.',
            'open_source_playground': 'Open-source is my playground – if I spot a bug, I\'ll either fix it or make sure to bring it to attention.',
            'fun_bytes': 'Fun Bytes',
            'list_memory_management': 'Memory management enthusiast - because who doesn\'t love a well-organized brain?',
            'list_blockchain_believer': 'Blockchain believer: on a quest to uncover its secrets.',
            'list_fluent_go_rust': 'Fluent in both Go and Rust: like being bilingual, but cooler.',
            'list_graduated_software_engineering': 'Graduated in Software Engineering with a focus on Parallelism and Concurrency in distributed systems.',
            'list_anime_enthusiast': 'Anime Enthusiast - One Piece isn\'t just a show, it\'s a lifestyle!',
            'dive_deeper': 'Dive Deeper Into My World',

        }
    },
    fr: {
        translation: {
            'hi': 'Salut 👋🏻, c\'est',
            'contact': 'Contact',
            'cv': 'CV',
            'blog': 'Blog',
            'code': 'Code',
            'watchlist': 'Veille',
            'roadmap': 'Plan',


            'software_engineer': 'Ingénieur logiciel',
            'who_loves_go_rust': 'Qui aime autant Go que Rust.',
            'passion_memory_management': 'Ma passion réside dans le démêlement des mystères de la gestion de la mémoire - un grand merci à Rust pour cela ! - et plonger dans le monde exaltant du multithreading et du multiprocessing. Grâce à Go, c\'est comme avoir des super-pouvoirs mais dans le monde du codage !',
            'more_about_me': 'Mais attendez, il y a plus ! Je suis aussi un explorateur passionné de la technologie blockchain, constamment émerveillé par ses possibilités infinies.',
            'open_source_playground': 'L’open-source est mon terrain de jeu – si je repère un bug, je le corrige ou m’assure de le signaler.',
            'fun_bytes': 'Bouchées de plaisir',
            'list_memory_management': 'Passionné de gestion de la mémoire - parce que qui n\'aime pas un cerveau bien organisé ?',
            'list_blockchain_believer': 'Croyant de la blockchain : en quête de découvrir ses secrets.',
            'list_fluent_go_rust': 'Parlant couramment Go et Rust : comme être bilingue, mais plus cool.',
            'list_graduated_software_engineering': 'Diplômé en génie logiciel avec une spécialisation en parallélisme et concurrence dans les systèmes distribués.',
            'list_anime_enthusiast': 'Enthousiaste d\'anime - One Piece n\'est pas seulement une émission, c\'est un mode de vie !',
            'dive_deeper': 'Plongez plus profondément dans mon monde',

        }
    },

};

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
