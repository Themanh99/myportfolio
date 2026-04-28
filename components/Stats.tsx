'use client';

import { useEffect, useState } from 'react';
import CountUp from 'react-countup';

interface PortfolioData {
	meta: {
		careerStartDate: string;
		githubUsername: string;
	};
	home: {
		stats: {
			clientsLabel: string;
			clientsCount: number;
			commitsLabel: string;
			commitsCount: number;
		};
	};
}

function calculateYearsOfExperience(startDate: string): number {
	const start = new Date(startDate);
	const now = new Date();
	const diffMs = now.getTime() - start.getTime();
	const diffYears = diffMs / (1000 * 60 * 60 * 24 * 365.25);
	return Math.floor(diffYears);
}

const Stats = () => {
	const [stats, setStats] = useState([
		{ number: 0, title: 'Years of experience' },
		{ number: 0, title: 'GitHub Projects' },
		{ number: 0, title: 'Technologies' },
		{ number: 0, title: 'Commits code' },
	]);

	useEffect(() => {
		const loadStats = async () => {
			try {
				const res = await fetch('/data/portfolio-data.json');
				const data: PortfolioData = await res.json();

				const yearsOfExp = calculateYearsOfExperience(data.meta.careerStartDate);

				// Fetch GitHub repos count
				let repoCount = 0;
				try {
					const ghRes = await fetch(
						`https://api.github.com/users/${data.meta.githubUsername}`
					);
					if (ghRes.ok) {
						const ghData = await ghRes.json();
						repoCount = ghData.public_repos || 0;
					}
				} catch {
					repoCount = 0;
				}

				setStats([
					{ number: yearsOfExp, title: 'Years of experience' },
					{ number: repoCount, title: 'GitHub Projects' },
					{ number: data.home.stats.clientsCount, title: data.home.stats.clientsLabel },
					{ number: data.home.stats.commitsCount, title: data.home.stats.commitsLabel },
				]);
			} catch (error) {
				console.error('Failed to load portfolio data:', error);
			}
		};

		loadStats();
	}, []);

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
