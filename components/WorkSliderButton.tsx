import React from 'react';
import { useSwiper } from 'swiper/react';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';

interface WorkSliderButtonProps {
	containerStyles: string;
	btnStyles: string;
	iconStyles: string;
}

const WorkSliderButton: React.FC<WorkSliderButtonProps> = ({ containerStyles, btnStyles, iconStyles }) => {
	const swiper = useSwiper();

	return (
		<div className={containerStyles}>
			<button className={btnStyles} onClick={() => swiper.slidePrev()}>
				<PiCaretLeftBold className={iconStyles} />
			</button>

			<button className={btnStyles} onClick={() => swiper.slideNext()}>
				<PiCaretRightBold className={iconStyles} />
			</button>
		</div>
	);
};

export default WorkSliderButton;
