'use client';

import { useEffect, useState, useMemo } from 'react';
import {
	FaHtml5,
	FaCss3,
	FaJs,
	FaReact,
	FaNodeJs,
	FaAws,
} from 'react-icons/fa';
import {
	SiTypescript,
	SiNextdotjs,
	SiRedux,
	SiMongodb,
	SiDocker,
	SiGit,
	SiJest,
	SiTailwindcss,
	SiAngular,
	SiVuedotjs,
	SiNestjs,
	SiExpress,
	SiPostgresql,
	SiMysql,
	SiRedis,
	SiSass,
} from 'react-icons/si';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

// Icon mapping — maps JSON iconName to actual React component
const iconMap: Record<string, React.ReactNode> = {
	FaHtml5: <FaHtml5 />,
	FaCss3: <FaCss3 />,
	FaJs: <FaJs />,
	FaReact: <FaReact />,
	FaNodeJs: <FaNodeJs />,
	FaAws: <FaAws />,
	SiTypescript: <SiTypescript />,
	SiNextdotjs: <SiNextdotjs />,
	SiRedux: <SiRedux />,
	SiMongodb: <SiMongodb />,
	SiDocker: <SiDocker />,
	SiGit: <SiGit />,
	SiJest: <SiJest />,
	SiTailwindcss: <SiTailwindcss />,
	SiAngular: <SiAngular />,
	SiVuedotjs: <SiVuedotjs />,
	SiNestjs: <SiNestjs />,
	SiExpress: <SiExpress />,
	SiPostgresql: <SiPostgresql />,
	SiMysql: <SiMysql />,
	SiRedis: <SiRedis />,
	SiSass: <SiSass />,
};

interface PortfolioData {
	meta: { careerStartDate: string };
	about: {
		title: string;
		description: string;
		info: Array<{ fieldName: string; fieldValue: string }>;
	};
	experience: {
		title: string;
		description: string;
		items: Array<{
			position: string;
			company: string;
			duration: string;
			description: string;
		}>;
	};
	education: {
		title: string;
		description: string;
		items: Array<{
			institution: string;
			degree: string;
			duration: string;
		}>;
	};
	skills: {
		title: string;
		description: string;
		items: Array<{
			name: string;
			iconLib: string;
			iconName: string;
		}>;
	};
}

function calculateExperienceLabel(startDate: string): string {
	const start = new Date(startDate);
	const now = new Date();
	const diffMs = now.getTime() - start.getTime();
	const diffYears = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 365.25));
	return `${diffYears}+ Years`;
}

const Resume = () => {
	const [data, setData] = useState<PortfolioData | null>(null);

	useEffect(() => {
		fetch('/data/portfolio-data.json')
			.then((res) => res.json())
			.then((json) => setData(json))
			.catch(console.error);
	}, []);

	const aboutInfo = useMemo(() => {
		if (!data) return [];
		return data.about.info.map((item) => {
			if (item.fieldName === 'Experience') {
				return {
					...item,
					fieldValue: calculateExperienceLabel(data.meta.careerStartDate),
				};
			}
			return item;
		});
	}, [data]);

	const skillItems = useMemo(() => {
		if (!data) return [];
		return data.skills.items.map((item) => ({
			icon: iconMap[item.iconName] || <FaJs />,
			name: item.name,
		}));
	}, [data]);

	if (!data) {
		return (
			<div className="min-h-[80vh] flex items-center justify-center">
				<div className="text-white/60 text-xl">Loading...</div>
			</div>
		);
	}

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
								<h3 className="text-4xl font-bold">{data.experience.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{data.experience.description}</p>
								<ScrollArea className="h-[480px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{data.experience.items.map((item, index) => {
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
								<h3 className="text-4xl font-bold">{data.education.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{data.education.description}</p>
								<ScrollArea className="h-[480px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{data.education.items.map((item, index) => {
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
								<h3 className="text-4xl font-bold">{data.about.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{data.about.description}</p>
								<ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
									{aboutInfo.map((item, index) => {
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
								<div className="flex flex-col gap-[30px] text-center xl:text-left">
									<h3 className="text-4xl font-bold">{data.skills.title}</h3>
									<p className="max-w-[680px] text-white/60 mx-auto xl:mx-0">{data.skills.description}</p>

									<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
										{skillItems.map((item, index) => {
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
