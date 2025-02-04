'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Stairs from './Stairs';

const StairTransition = () => {
	const pathname = usePathname();
	return (
		<>
			<AnimatePresence mode="wait">
				<div key={pathname}>
					<div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
						<Stairs />

						<motion.div
							initial={{ opacity: 1 }}
							animate={{
								opacity: 0,
								transition: { duration: 0.4, delay: 1, ease: 'easeInOut' },
							}}
							className="h-screen w-screen bg-primary fixed top-0 pointer-events-none"
						/>
					</div>
				</div>
			</AnimatePresence>
		</>
	);
};

export default StairTransition;
