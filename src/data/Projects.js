import BloodCheck from '../assets/BloodCheck.png'
import WebyChatRoom from '../assets/webychatroom.png'
import LPGD from '../assets/lpgdetection.png'
import AskMeAnything from '../assets/AskMeAnything.png'
import CNSystem from '../assets/CampusNavigationSystem.png'
import LEO from '../assets/LeoCubeSat.png'


export const projects = [

    {
        id: 0,
        img: CNSystem,
        skills: ["Python","Json"],
        title: 'Campus Navigator System for KIST',
        desc: 'A system that can help you navigate the campus using your location',
        live: '/404',
        github: 'https://github.com/thenabinamallik/SmartCampusNavigationSystemKIST.git'
    },
    {
        id: 1,
        img: WebyChatRoom,
        skills: ["HTML", "CSS", "Javascript", "Firebase"],
        title: 'Weby Chat Room',
        desc: 'End to End Personal Chat Room using your secrete key',
        live: 'https://webychatroom.netlify.app/',
        github: 'https://github.com/thenabinamallik/WebyChatRoom.git'
    },
    {
        id: 2,
        img: LPGD,
        skills: ["HTML", "CSS", "Javascript","IOT", "C++"],
        title: 'LPG Detection and Aleart System unisg IOT',
        desc: 'A fully automated system that can detect the LPG leakege and send aleart to the user',
        live: 'https://lpg-detection.vercel.app/',
        github: 'https://github.com/thenabinamallik/lpgDetection.git'
    },
    {
        id: 3,
        img: AskMeAnything,
        skills: ["NextJS", "TailwindCSS"],
        title: 'Ask Me Anything',
        desc: 'An AI-Powered Search Engine which can answer any question you ask',
        live: 'https://askmeanything-sigma.vercel.app/',
        github: 'https://github.com/thenabinamallik/askmeanything.git'
    },
    {
        id: 4,
        img: BloodCheck,
        skills: ["Python","Javascript", "HTML", "CSS"],
        title: 'BloodCheck',
        desc: 'Detect bloodgroup uging fingerprint patterns',
        live: "/404",
        github: 'https://github.com/thenabinamallik/BloodCheck.git',
    },
    {
        id: 5,
        img: LEO,
        skills: ["Python","C++", "Arduino","HTML", "CSS", "Javascript", "IOT", "Firebase",],
        title: 'Low Earth Orbit CubeSat and it\'s Ground Station',
        desc: 'To study the earch\'s atmosphere and collect data using a CubeSat',
        live: '/404',
        github: '/404'
    },
    {
        id: 6,
        img: "https://quickpixelitsollution.vercel.app/assets/minecraft-office-hero-DcIwE7gU.jpg",
        skills: ["React JS", "Tailwind", "UI", 'TypeScript'],
        title: 'Quick PIxel IT Solution',
        desc: "A personal landing website for IT Startups",
        live: 'https://quickpixelitsollution.vercel.app/',
        github: 'https://github.com/thenabinamallik/QuickPixel'
    }
]
