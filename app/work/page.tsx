'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import Image from 'next/image';
import WorkSliderButton from '@/components/WorkSliderButton';
import { portfolioData } from '@/lib/portfolio-data';

// Gradient backgrounds for projects without screenshots
const projectGradients = [
	'from-emerald-500/20 to-cyan-500/20',
	'from-violet-500/20 to-fuchsia-500/20',
	'from-amber-500/20 to-orange-500/20',
	'from-blue-500/20 to-indigo-500/20',
	'from-rose-500/20 to-pink-500/20',
	'from-teal-500/20 to-green-500/20',
];

const Work = () => {
	const projects = portfolioData.projects;
	const [project, setProject] = useState(projects[0]);

	const handleSlideChange = (swiper: { activeIndex: number }) => {
		const currentIndex = swiper.activeIndex;
		setProject(projects[currentIndex]);
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
			className="min-h-[80px] flex flex-col justify-center py-12 xl:px-0"
		>
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row xl:gap-[30px]">
					<div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
						<div className="flex flex-col gap-[30px] h-[50%]">
							{/* outline num */}
							<div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
							{/* project title */}
							<h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
								{project.title}
							</h2>
							{/* project meta */}
							<div className="flex gap-4 text-sm text-white/40">
								<span>{project.duration}</span>
								<span>•</span>
								<span>{project.domain}</span>
								<span>•</span>
								<span>Team: {project.teamSize}</span>
							</div>
							{/* project description */}
							<p className="text-white/60">{project.description}</p>
							{/* stack */}
							<ul className="flex flex-wrap gap-4">
								{project.stack.map((item, index) => {
									return (
										<li key={index} className="text-xl text-accent">
											{item.name}
											{index !== project.stack.length - 1 && ','}
										</li>
									);
								})}
							</ul>
							{/* border */}
							<div className="border border-white/20"></div>
							{/* buttons */}
							<div className="flex items-center gap-4">
								{project.live && (
									<Link href={project.live}>
										<TooltipProvider delayDuration={100}>
											<Tooltip>
												<TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
													<BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
												</TooltipTrigger>
												<TooltipContent>
													<p>Live project</p>
												</TooltipContent>
											</Tooltip>
										</TooltipProvider>
									</Link>
								)}

								{project.github && (
									<Link href={project.github}>
										<TooltipProvider delayDuration={100}>
											<Tooltip>
												<TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
													<BsGithub className="text-white text-3xl group-hover:text-accent" />
												</TooltipTrigger>
												<TooltipContent>
													<p>Github repo</p>
												</TooltipContent>
											</Tooltip>
										</TooltipProvider>
									</Link>
								)}

								{!project.live && !project.github && (
									<div className="text-white/40 text-sm italic">Enterprise project — source code is private</div>
								)}
							</div>
						</div>
					</div>
					<div className="w-full xl:w-[50%]">
						<Swiper
							spaceBetween={30}
							slidesPerView={1}
							className="xl:h-[520px] mb-12"
							onSlideChange={handleSlideChange}
						>
							{projects.map((item, index) => {
								return (
									<SwiperSlide key={index} className="w-full">
										<div className="h-[460px] relative group flex justify-center items-center bg-[#232329] rounded-xl overflow-hidden">
											{/* overlay */}
											<div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
											{/* image or gradient placeholder */}
											{item.image ? (
												<div className="relative w-full h-full">
													<Image src={item.image} fill className="object-cover" alt={item.title} />
												</div>
											) : (
												<div className={`w-full h-full bg-gradient-to-br ${projectGradients[index % projectGradients.length]} flex flex-col items-center justify-center gap-6 p-8`}>
													<div className="text-7xl font-extrabold text-white/10">{item.num}</div>
													<h3 className="text-2xl font-bold text-white/80 text-center">{item.title}</h3>
													<p className="text-sm text-white/40 text-center max-w-[300px]">{item.domain}</p>
													<div className="flex flex-wrap gap-2 justify-center max-w-[350px]">
														{item.stack.map((tech, i) => (
															<span key={i} className="px-3 py-1 bg-white/10 rounded-full text-xs text-accent">
																{tech.name}
															</span>
														))}
													</div>
												</div>
											)}
										</div>
									</SwiperSlide>
								);
							})}
							{/* slider button */}
							<WorkSliderButton
								containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
								iconStyles=""
								btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-xl"
							/>
						</Swiper>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Work;
