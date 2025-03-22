import SockeIoIcon from '../assets/socket-io-icon.png';
import WebrtcIcon from '../assets/webrtc-icon.png'
import ImaginifyImage from '../assets/imaginify.png';
import VidiconImage from '../assets/vidicon.png';
import EcomvisionImage from '../assets/ecomvision.png';
import TextSummaryImage from '../assets/textsummary.png';

// export const frameworks = [
//     {
//         id: 1,
//         name: 'MERN',
//         path: ''
//     },
//     {
//         id: 2,
//         name: 'NextJS',
//         path: 'https://img.icons8.com/color/48/nextjs.png'
//     }
// ]
export const languages = [
    {
        id: 1,
        name: 'C++',
        path: 'https://img.icons8.com/color/48/c-plus-plus-logo.png'
    },
    {
        id: 2,
        name: 'Javascript',
        path: 'https://img.icons8.com/fluency/48/javascript.png'
    },
    {
        id: 3,
        name: 'Typescript',
        path: 'https://img.icons8.com/color/48/typescript.png'
    },
    {
        id: 4,
        name: 'Python',
        path: 'https://img.icons8.com/color/48/python--v1.png'
    }
]

export const frontend = [
    {
        id:1,
        name: 'React',
        path: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png'
    },
    {
        id:2,
        name: 'Next',
        path: 'https://img.icons8.com/nolan/64/nextjs.png'
    },
    {
        id: 3,
        name: 'TailwindCSS',
        path: 'https://img.icons8.com/color/48/tailwindcss.png'
    },
    {
        id: 4,
        name: 'HTML',
        path: 'https://img.icons8.com/color/48/html-5--v1.png'
    },
    {
        id: 5,
        name: 'CSS',
        path: 'https://img.icons8.com/color/48/css3.png'
    }
]

export const backend = [
    {
        id: 1,
        name: 'NodeJS',
        path: 'https://img.icons8.com/color/48/nodejs.png'
    },
    {
        id: 2,
        name: 'Express',
        path: 'https://img.icons8.com/nolan/64/express-js.png'
    },
    {
        id: 3,
        name: 'Rest',
        path: 'https://img.icons8.com/parakeet/48/api-settings.png'
    },
    {
        id: 4,
        name: 'GraphQL',
        path: 'https://img.icons8.com/fluency/48/graphql.png'
    },
    {
        id: 5,
        name: 'WebRTC',
        path: SockeIoIcon
    },
    {
        id: 6,
        name: 'Websocket',
        path: WebrtcIcon
    },
    {
        id: 7,
        name: 'Prisma ORM',
        path: 'https://img.icons8.com/color/48/prisma-orm.png'
    }
]

export const databases = [
    {
        id: 1,
        name: 'MongoDB',
        path: 'https://img.icons8.com/color/48/mongodb.png'
    },
    {
        id: 2,
        name: 'PostgreSQL',
        path: 'https://img.icons8.com/color/48/postgreesql.png'
    }
]

export const tools = [
    {
        id: 1,
        name: 'Git',
        path: 'https://img.icons8.com/color/48/git.png',
    },
    {
        id: 2,
        name: 'Docker',
        path: 'https://img.icons8.com/fluency/48/docker.png'
    },
    {
        id: 3,
        name : 'AWS',
        path: 'https://img.icons8.com/nolan/64/amazon-web-services.png'
    }
]

export const projects = [
    {
        id:1,
        name:'VidiCON - Video Conferencing App',
        technologies: ['Nodejs', 'Reactjs', 'Websockets', 'WebRTC'],
        details: "Built a real-time video conferencing app with one-to-many video calls, screen sharing and chat.Integrated WebRTC for video streaming and WebSockets for real-time communication.",
        image: VidiconImage,
        link: 'https://star-connection-client.vercel.app/',
        github: 'https://github.com/praveshtiwari150/VidiCON-Video-Conferencing.git'
    },
    {
        id:2,
        name: 'Imagnify - Image Editing App',
        technologies: ["NextJS", "MongoDB","Cloudinary", "Cloudinary API's"],
        details: "AI-powered image processing app with features like image restoration, recoloring, object removal, generative fill, and background removal.",
        image: ImaginifyImage,
        link: 'https://imaginify-official-pqo8rsb78-pravesh-tiwaris-projects.vercel.app/',
        github: 'https://github.com/praveshtiwari150/imaginify-official'
    },
    {
        id:3,
        name: 'EcomVision',
        technologies: ['ReactJS', 'NodeJS', 'MongoDB', 'Nivo Charts'],
        details: "Built an interactive data visualization dashboard with graphs and charts.Utilized Nivo Charts to improve data readability",
        image: EcomvisionImage,
        link: 'https://dashboard-frontend-nvjj.onrender.com/',
        github: 'https://github.com/praveshtiwari150/fullstack-dashboard'
    },
    {
        id:4,
        name: 'Text Summarization Using NLP',
        technologies: ['Python', 'Flask', 'SpaCy'],
        details: 'Web app that generates summaries using extractive summarization techniques.',
        image: TextSummaryImage,
        link: 'https://drive.google.com/file/d/1aa_RBZi3a0w2chztmMhZNxjPEgc7T28v/view?usp=sharing',
        github: 'https://github.com/praveshtiwari150/text-summarization-using-nlp'
    }
]