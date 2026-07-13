import {
    Layout,
    Cpu,
    Terminal,
    Layers,
    Pencil,
    Laptop,
} from "lucide-react";

import LogoLoop from "../components/LogoLoop";
import Cubes from "../components/Cubes"

import {
    SiReact,
    SiTailwindcss,
    SiFigma,
    SiJavascript
} from "react-icons/si";

import { FaHtml5 } from "react-icons/fa";
import { DiPhotoshop } from "react-icons/di";


const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },

    {
        node: <DiPhotoshop />,
        title: "Tailwind CSS",
        href: "https://adobe.com",
    },

    {
        node: <SiTailwindcss />,
        title: "Tailwind CSS",
        href: "https://tailwindcss.com",
    },

    {
        node: <SiFigma />,
        title: "Tailwind CSS",
        href: "https://figma.com",
    },

    {
        node: <FaHtml5 />,
        title: "HTML5",
        href: "https://html.com",
    },

    {
        node: <SiJavascript />,
        title: "HTML5",
        href: "https://javascript.com",
    },
];

const Experiences = () => {
    const skills = [
        {
            id: 1,
            name: "HTML & CSS",
            width: "85%",
            icon: Layout,
        },
        {
            id: 2,
            name: "React JS",
            width: "70%",
            icon: Cpu,
        },
        {
            id: 3,
            name: "JavaScript",
            width: "80%",
            icon: Terminal,
        },
        {
            id: 4,
            name: "Figma",
            width: "85%",
            icon: Layers,
        },
        {
            id: 5,
            name: "Photoshop",
            width: "80%",
            icon: Pencil,
        },
        {
            id: 6,
            name: "Canva",
            width: "90%",
            icon: Laptop,
        },
    ];

    return (
        <section
            id="skills"
            className="relative overflow-hidden py-20 text-white"
        >
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-16">
                <div className="grid items-start gap-16 md:grid-cols-2">
                    <div data-aos="fade-right">
                        <h2 className="mb-12 text-4xl font-extrabold md:text-5xl">
                            Technical <span className="text-primary">Skills</span>
                        </h2>

                        <div className="space-y-8">
                            {skills.map((skill) => {
                                const SkillIcon = skill.icon;

                                return (
                                    <div key={skill.id} className="group">
                                        <div className="mb-2 flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="rounded-lg bg-[#111a3e] p-2 transition-colors duration-300 group-hover:bg-primary">
                                                    <SkillIcon
                                                        size={20}
                                                        className="text-primary group-hover:text-white"
                                                    />
                                                </div>

                                                <span className="font-medium tracking-wide">
                                                    {skill.name}
                                                </span>
                                            </div>

                                            <span className="font-bold text-primary">
                                                {skill.width}
                                            </span>
                                        </div>

                                        <div className="h-2 w-full rounded-full bg-[#131d30] p-0.5">
                                            <div
                                                className="h-full rounded-full bg-gradient-to-r from-primary to-cyan-400 shadow-[0_0_10px_#06a2c2]"
                                                style={{ width: skill.width }}
                                            />
                                        </div>

                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div
                        className="flex items-center justify-center h-full"
                        data-aos="fade-left"
                    >
                        <div className="relative w-full h-[650px]">
                            <Cubes
                                gridSize={8}
                                maxAngle={45}
                                radius={3}
                                borderStyle="2px dashed #2c87a5ff"
                                faceColor="#1a1a2e"
                                rippleColor="#06a2c2"
                                rippleSpeed={1.5}
                                autoAnimate
                                rippleOnClick
                            />
                        </div>
                    </div>
                </div>

                <div
                    style={{
                        height: "200px",
                        position: "relative",
                        overflow: "hidden",
                        marginTop: "80px",
                    }}
                >
                    <LogoLoop
                        logos={techLogos}
                        speed={100}
                        direction="left"
                        logoHeight={60}
                        gap={60}
                        hoverSpeed={0}
                        scaleOnHover
                    />

                </div>
            </div>
        </section>
    );
};

export default Experiences;