'use client';

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import {
	SiTypescript,
	SiNextdotjs,
	SiRedux,
	SiSass,
	SiMongodb,
	SiGraphql,
	SiPostgresql,
	SiDocker,
	SiFirebase,
	SiGit,
	SiJest,
	SiTailwindcss,
} from 'react-icons/si';

// about data
const about = {
	title: 'About Me',
	info: [
		{
			fieldName: 'Name',
			fieldValue: 'Chu The manh',
		},
		{
			fieldName: 'Phone',
			fieldValue: '(+84) 345 574 951',
		},
		{
			fieldName: 'Experience',
			fieldValue: '3+ Years',
		},
		{
			fieldName: 'Freelance',
			fieldValue: 'Available',
		},
		{
			fieldName: 'Educational',
			fieldValue: 'Bachelor of Information Technology',
		},
		{
			fieldName: 'Language',
			fieldValue: 'Vietnamese, English, Korean',
		},
	],
	description:
		"I'm a full-stack developer with a passion for creating beautiful and functional web applications. I have experience working with a variety of technologies, including React, Node.js, and MongoDB. I'm always looking to learn new things and improve my skills.",
};

// experience data
const experience = {
	icon: '',
	title: 'My experience',
	items: [
		{
			position: 'Junior Developer',
			company: 'E-commerce Startup',
			duration: '2020 - 2020',
		},
		{
			position: 'Front-end Developer',
			company: 'E-commerce Startup',
			duration: '2020 - 2021',
		},
		{
			position: 'Front-end Developer',
			company: 'Fpt software',
			duration: '2021 - Present',
		},
	],
	description:
		"I'm a full-stack developer with a passion for creating beautiful and functional web applications. I have experience working with a variety of technologies, including React, Node.js, and MongoDB. I'm always looking to learn new things and improve my skills.",
};

// education data
const education = {
	icon: '',
	title: 'My education',
	skillList: [
		{
			institution: 'Udacity Nanodegree',
			degree: 'React Developer',
			duration: '2023',
		},
		{
			institution: 'Udacity Nanodegree',
			degree: 'Front-end Web Developer',
			duration: '2024',
		},
		{
			institution: 'Udacity Nanodegree',
			degree: 'Full Stack Web Developer',
			duration: '2024',
		},
		{
			institution: 'Udemy Course',
			degree: 'ReactJs From Beginner to Advanced',
			duration: '2022',
		},
		{
			institution: 'Udemy Course',
			degree: 'NodeJs From Beginner to Advanced',
			duration: '2022',
		},
		{
			institution: 'Ha Noi University of Industry',
			degree: 'Bachelor of Information Technology',
			duration: '2020',
		},
	],
	description:
		'I have a strong educational background in computer science and web development. I completed my Bachelor of Information Technology at the Ha Noi University of Industry in 2020. Additionally, I have pursued various online courses and nanodegrees to enhance my skills in front-end and full-stack web development, including programs from Udacity and Udemy.',
};

// skills data
const skills = {
	icon: '',
	title: 'My skills',
	items: [
		{
			icon: <FaHtml5 />,
			name: 'html 5',
		},
		{
			icon: <FaCss3 />,
			name: 'css 3',
		},
		{
			icon: <FaJs />,
			name: 'javascript',
		},
		{
			icon: <FaReact />,
			name: 'react.js',
		},
		{
			icon: <FaNodeJs />,
			name: 'node.js',
		},
		{
			icon: <SiTypescript />,
			name: 'typescript',
		},
		{
			icon: <SiNextdotjs />,
			name: 'next.js',
		},
		{
			icon: <SiRedux />,
			name: 'redux',
		},
		{
			icon: <SiMongodb />,
			name: 'mongodb',
		},
		{
			icon: <SiDocker />,
			name: 'docker',
		},
		{
			icon: <SiFirebase />,
			name: 'firebase',
		},
		{
			icon: <SiGit />,
			name: 'git',
		},
		{
			icon: <SiJest />,
			name: 'jest',
		},
		{
			icon: <SiTailwindcss />,
			name: 'tailwindcss',
		},
	],
	description:
		'I have a diverse set of skills in web development, ranging from front-end technologies like HTML5, CSS3, and JavaScript to back-end technologies like Node.js and MongoDB. I am proficient in using modern frameworks and libraries such as React.js, Next.js, and Redux. Additionally, I have experience with TypeScript, Docker, Firebase, Git, Jest, and TailwindCSS, which allows me to build robust and scalable web applications. My continuous learning and hands-on experience have equipped me with the ability to adapt to new technologies and deliver high-quality solutions.',
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.5, delay: 2.4, ease: 'easeIn' } }}
			className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
		>
			<div className="container mx-auto">
				<Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
					<TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
						<TabsTrigger value="about">About</TabsTrigger>
						<TabsTrigger value="experience">Experience</TabsTrigger>
						<TabsTrigger value="education">Education</TabsTrigger>
						<TabsTrigger value="skills">Skills</TabsTrigger>
					</TabsList>
					{/* content */}
					<div className="min-h-[70vh] w-full">
						{/* experience */}
						<TabsContent value="experience" className="w-full">
							experience
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</motion.div>
	);
};

export default Resume;
