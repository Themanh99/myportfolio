import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

// Import components
import Header from '@/components/Header';
import PageTransition from '@/components/PageTransition';
import StairTransition from '@/components/StairTransition';

const jetbrainsMono = JetBrains_Mono({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
	variable: '--font-jetbrainsMono',
});

export const metadata: Metadata = {
	title: 'Chu The Manh | Fullstack Developer',
	description: 'Fullstack Developer with 4+ years of experience in ReactJS, Node.js, and enterprise applications.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={jetbrainsMono.variable} suppressHydrationWarning>
				<Header />
				<StairTransition />
				<PageTransition>{children}</PageTransition>
			</body>
		</html>
	);
}
