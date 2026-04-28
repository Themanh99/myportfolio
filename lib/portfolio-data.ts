import rawData from '@/data/portfolio-data.json';

// Types
export interface PortfolioData {
	meta: {
		careerStartDate: string;
		githubUsername: string;
		cvFileName: string;
	};
	home: {
		role: string;
		greeting: string;
		name: string;
		description: string;
		stats: {
			clientsLabel: string;
			clientsCount: number;
			commitsLabel: string;
			commitsCount: number;
		};
	};
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
	projects: Array<{
		num: string;
		category: string;
		title: string;
		description: string;
		stack: Array<{ name: string }>;
		image: string;
		live: string;
		github: string;
		duration: string;
		teamSize: number;
		domain: string;
	}>;
	contact: {
		phone: string;
		phoneRaw: string;
		email: string;
		address: string;
	};
	socials: {
		github: string;
		linkedin: string;
		facebook: string;
	};
}

// Export typed data — available synchronously, no fetch needed
export const portfolioData: PortfolioData = rawData;

// Helper: calculate years of experience from start date
export function getYearsOfExperience(): number {
	const start = new Date(portfolioData.meta.careerStartDate);
	const now = new Date();
	const diffMs = now.getTime() - start.getTime();
	return Math.floor(diffMs / (1000 * 60 * 60 * 24 * 365.25));
}

// Helper: get experience label like "4+ Years"
export function getExperienceLabel(): string {
	return `${getYearsOfExperience()}+ Years`;
}
