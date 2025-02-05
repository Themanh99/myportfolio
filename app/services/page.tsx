'use client';

import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';

const services = [
	{
		number: '01',
		title: 'Web Development',
		description: 'Building responsive and high-performance websites using the latest technologies.',
		href: '',
	},
	{
		number: '02',
		title: 'UI/UX Design',
		description: 'Creating intuitive and visually appealing user experiences for web and mobile applications.',
		href: '',
	},
	{
		number: '03',
		title: 'Logo Design',
		description: 'Designing unique and memorable logos that represent your brand identity.',
		href: '',
	},
	{
		number: '04',
		title: 'SEO',
		description: 'Optimizing websites to rank higher on search engines and drive organic traffic.',
		href: '',
	},
];

import { motion } from 'framer-motion';

const Services = () => {
	return (
		<section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-8">
			<div className="container mx-auto">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: {
							duration: 0.4,
							delay: 2.4,
							ease: 'easeIn',
						},
					}}
					className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
				>
					{services.map((item, index) => {
						return (
							<div key={index} className="flex-1 flex justify-center flex-col gap-6 group">
								<div className="w-full flex justify-between items-center">
									<div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
										{item.number}
									</div>
									<Link
										href={item.href}
										className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
									>
										<BsArrowDownRight className="text-primary text-3xl" />
									</Link>
								</div>
								{/* title */}
								<h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
									{item.title}
								</h2>
								{/* description */}
								<p className="text-white/60">{item.description}</p>
								{/* border */}
								<div className="border-b border-white/20 w-full"></div>
							</div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
};

export default Services;
