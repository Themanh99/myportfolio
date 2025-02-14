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

const projects = [
	{
		num: '01',
		category: 'frontend',
		title: 'Project 1',
		description: 'A responsive web application built with HTML, CSS, and JavaScript.',
		stack: [
			{
				name: 'HTML 5',
			},
			{
				name: 'JavaScript',
			},
			{
				name: 'CSS 3',
			},
		],
		image: '/app/work/assets/project1.png',
		live: 'https://example.com/project1',
		github: 'https://github.com/username/project1',
	},
	{
		num: '02',
		category: 'frontend',
		title: 'Project 2',
		description: 'A single-page application using React and Redux.',
		stack: [
			{
				name: 'React',
			},
			{
				name: 'Redux',
			},
			{
				name: 'JavaScript',
			},
		],
		image: '/app/work/assets/project2.png',
		live: 'https://example.com/project2',
		github: 'https://github.com/username/project2',
	},
	{
		num: '03',
		category: 'frontend',
		title: 'Project 3',
		description: 'A portfolio website built with Next.js and Tailwind CSS.',
		stack: [
			{
				name: 'Next.js',
			},
			{
				name: 'Tailwind CSS',
			},
			{
				name: 'JavaScript',
			},
		],
		image: '/app/work/assets/project3.png',
		live: 'https://example.com/project3',
		github: 'https://github.com/username/project3',
	},
	{
		num: '04',
		category: 'frontend',
		title: 'Project 4',
		description: 'An e-commerce site developed with Vue.js and Vuex.',
		stack: [
			{
				name: 'Vue.js',
			},
			{
				name: 'Vuex',
			},
			{
				name: 'JavaScript',
			},
		],
		image: '/app/work/assets/project4.png',
		live: 'https://example.com/project4',
		github: 'https://github.com/username/project4',
	},
	{
		num: '05',
		category: 'frontend',
		title: 'Project 5',
		description: 'A blogging platform created with Angular and NgRx.',
		stack: [
			{
				name: 'Angular',
			},
			{
				name: 'NgRx',
			},
			{
				name: 'TypeScript',
			},
		],
		image: '/app/work/assets/project5.png',
		live: 'https://example.com/project5',
		github: 'https://github.com/username/project5',
	},
];

const work = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
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
							{/* project category */}
							<h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
								{project.category} project
							</h2>
							{/* project description */}
							<p className="text-white/60">{project.description}</p>
							{/* stack */}
							<ul className="flex gap-4">
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
										<div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
											{/* overlay */}
											<div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
											{/* image */}
											<div className="relative w-full h-full">
												<Image src={project.image} fill className="object-cover" alt="image..." />
											</div>
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

export default work;
