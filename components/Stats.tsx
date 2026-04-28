'use client';

import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { portfolioData, getYearsOfExperience } from '@/lib/portfolio-data';

const Stats = () => {
	// Initialize with static data immediately — no loading state
	const yearsOfExp = getYearsOfExperience();
	const [githubRepos, setGithubRepos] = useState(0);

	useEffect(() => {
		// Only fetch GitHub repos count on client — the rest is instant
		const controller = new AbortController();
		fetch(`https://api.github.com/users/${portfolioData.meta.githubUsername}`, {
			signal: controller.signal,
		})
			.then((res) => (res.ok ? res.json() : null))
			.then((data) => {
				if (data?.public_repos) setGithubRepos(data.public_repos);
			})
			.catch(() => {});

		return () => controller.abort();
	}, []);

	const stats = [
		{ number: yearsOfExp, title: 'Years of experience' },
		{ number: githubRepos, title: 'GitHub Projects' },
		{ number: portfolioData.home.stats.clientsCount, title: portfolioData.home.stats.clientsLabel },
		{ number: portfolioData.home.stats.commitsCount, title: portfolioData.home.stats.commitsLabel },
	];

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
