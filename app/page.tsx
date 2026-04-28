'use client';

import { useEffect, useState } from 'react';
import Photo from '@/components/Photo';
import Social from '@/components/Social';
import Stats from '@/components/Stats';
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';

interface HomeData {
	meta: { cvFileName: string };
	home: {
		role: string;
		greeting: string;
		name: string;
		description: string;
	};
}

export default function Home() {
	const [data, setData] = useState<HomeData | null>(null);

	useEffect(() => {
		fetch('/data/portfolio-data.json')
			.then((res) => res.json())
			.then((json) => setData(json))
			.catch(console.error);
	}, []);

	const role = data?.home.role ?? 'Fullstack Developer';
	const greeting = data?.home.greeting ?? "Hello I'm";
	const name = data?.home.name ?? 'Chu The Manh';
	const description =
		data?.home.description ??
		'I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.';
	const cvFile = data?.meta.cvFileName ?? 'ChuTheManh_CV_FullstackDeveloper.pdf';

	return (
		<section className="h-full">
			<div className="container mx-auto h-full">
				<div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
					<div className="text-center xl:text-left order-2 xl:order-none">
						<span className="text-xl">{role}</span>
						<h1 className="h1 mb-6">
							{greeting} <br /> <span className="text-accent">{name}</span>
						</h1>
						<p className="max-w-[500px] mb-9 text-white/80">{description}</p>

						<div className="flex flex-col xl:flex-row items-center gap-8">
							<a href={`/assets/${cvFile}`} download>
								<Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
									<span>Download CV</span>
									<FiDownload className="text-xl" />
								</Button>
							</a>
							<div className="mb-8 xl:mb-0">
								<Social
									containerStyles="flex gap-6"
									iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center 
								text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
								/>
							</div>
						</div>
					</div>
					<div className="order-1 xl:order-none mb-8 xl:mb-0">
						<Photo />
					</div>
				</div>
			</div>
			<Stats />
		</section>
	);
}
