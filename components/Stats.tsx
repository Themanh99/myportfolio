'use client';

import CountUp from 'react-countup';

const stats = [
	{
		number: 3,
		title: 'Years of experience',
	},
	{
		number: 6,
		title: 'Projects',
	},
	{
		number: 50,
		title: 'Clients',
	},
	{
		number: 500,
		title: 'Commits code',
	},
];

const Stats = () => {
	return (
		<section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
			<div className="container mx-auto">
				<div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
					{stats.map((stat, index) => {
						return (
							<div key={index} className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
								<CountUp end={stat.number} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold" />
								<p
									className={`${stat.title.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'} leading-snug text-white/80`}
								>
									{stat.title}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Stats;
