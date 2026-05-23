import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiJavascript,
    SiTailwindcss,
    SiBootstrap,
    SiVuedotjs,
    SiLaravel,
    SiExpress,
    SiGit,
    SiFigma,
    SiMongodb,
    SiMysql,
} from "react-icons/si";

export const SKILL_CATEGORIES = [
    {
        title: "Frontend",
        skills: [
            {
                name: "React",
                icon: SiReact,
            },
            {
                name: "Next.js",
                icon: SiNextdotjs,
            },
            {
                name: "TypeScript",
                icon: SiTypescript,
            },
            {
                name: "JavaScript",
                icon: SiJavascript,
            },
            {
                name: "Tailwind CSS",
                icon: SiTailwindcss,
            },
            {
                name: "Bootstrap",
                icon: SiBootstrap,
            },
            {
                name: "Vue",
                icon: SiVuedotjs,
            },
        ],
    },

    {
        title: "Backend & Database",
        skills: [
            {
                name: "Laravel",
                icon: SiLaravel,
            },
            {
                name: "Express.js",
                icon: SiExpress,
            },
            {
                name: "MongoDB",
                icon: SiMongodb,
            },
            {
                name: "MySQL",
                icon: SiMysql,
            },
        ],
    },

    {
        title: "Tools & Design",
        skills: [
            {
                name: "Git",
                icon: SiGit,
            },
            {
                name: "Figma",
                icon: SiFigma,
            },
        ],
    },
];