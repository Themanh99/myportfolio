import Link from 'next/link';
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';

const socials = [
	{ icon: <FaGithub />, path: 'https://github.com/Themanh99' },
	{ icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/the-manh-chu-524772343/' },
	{ icon: <FaYoutube />, path: '' },
	{ icon: <FaTwitter />, path: '' },
	{ icon: <FaFacebook />, path: 'https://www.facebook.com/chu.t.manh.7' },
];

interface SocialProps {
	containerStyles: string;
	iconStyles: string;
}

const Social = ({ containerStyles, iconStyles }: SocialProps) => {
	return (
		<div className={containerStyles}>
			{socials.map((item, index) => {
				return (
					<Link key={index} href={item.path} className={iconStyles} target="_blank">
						{item.icon}
					</Link>
				);
			})}
		</div>
	);
};

export default Social;
