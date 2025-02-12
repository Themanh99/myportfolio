'use client';

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import {
	SiTypescript,
	SiNextdotjs,
	SiRedux,
	SiMongodb,
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
			position: 'Intern Developer',
			company: 'E-commerce Startup',
			duration: '2020 - 2020',
		},
		{
			position: 'Fresher Developer',
			company: 'E-commerce Startup',
			duration: '2020 - 2021',
		},
		{
			position: 'Fresher Developer',
			company: 'E-commerce Startup',
			duration: '2021 - 2021',
		},
		{
			position: 'Fresher Developer',
			company: 'Fpt software',
			duration: '01/2021 - 04/2021',
		},
		{
			position: 'Front-end Developer',
			company: 'Fpt software',
			duration: '2021 - Present',
		},
	],
	description:
		"I'm a Front-End developer with a passion for creating beautiful and functional web applications. I have experience working with a variety of technologies, including React, Node.js, and MongoDB. I'm always looking to learn new things and improve my skills.",
};

// education data
const education = {
	icon: '',
	title: 'My education',
	skillList: [
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
			institution: 'Udacity Nanodegree',
			degree: 'React Developer',
			duration: '2023',
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
				<Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-[60px]">
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
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">{experience.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
								<ScrollArea className="h-[480px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{experience.items.map((item, index) => {
											return (
												<li
													key={index}
													className="bg-[#232329] h-[200px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
												>
													<span className="text-accent">{item.duration}</span>
													<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
														{item.position}
													</h3>
													<div className="flex items-center gap-3">
														{/* dot */}
														<span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
														<p className="text-white/60">{item.company}</p>
													</div>
												</li>
											);
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>
						{/* Education */}
						<TabsContent value="education" className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">{education.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
								<ScrollArea className="h-[480px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{education.skillList.map((item, index) => {
											return (
												<li
													key={index}
													className="bg-[#232329] h-[200px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
												>
													<span className="text-accent">{item.duration}</span>
													<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
													<div className="flex items-center gap-3">
														{/* dot */}
														<span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
														<p className="text-white/60">{item.institution}</p>
													</div>
												</li>
											);
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>
						{/* About */}
						<TabsContent value="about" className="w-full text-center xl:text-left">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">{about.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
								<ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
									{about.info.map((item, index) => {
										return (
											<li key={index} className="flex items-center justify-center xl:justify-start gap-4">
												<span className="text-white/60 min-w-[110px]">{item.fieldName}</span>
												<span className="text-xl">{item.fieldValue}</span>
											</li>
										);
									})}
								</ul>
							</div>
						</TabsContent>
						{/* Skills */}
						<TabsContent value="skills" className="w-full">
							<div className="flex flex-col gap-[30px]">
								<div className="flex flex-col gap-[30px[ text-center xl:text-left">
									<h3 className="text-4xl font-bold">{skills.title}</h3>
									<p className="max-w-[680px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>

									<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
										{skills.items.map((item, index) => {
											return (
												<li key={index}>
													<TooltipProvider delayDuration={100}>
														<Tooltip>
															<TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
																<div className="text-6xl group-hover:text-accent transition-all duration-300">
																	{item.icon}
																</div>
															</TooltipTrigger>
															<TooltipContent>
																<p className="capitalize">{item.name}</p>
															</TooltipContent>
														</Tooltip>
													</TooltipProvider>
												</li>
											);
										})}
									</ul>
								</div>
							</div>
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</motion.div>
	);
};

export default Resume;
