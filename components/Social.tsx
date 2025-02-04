import Link from 'next/link';
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';

const socials = [
	{ icon: <FaGithub />, path: '' },
	{ icon: <FaLinkedinIn />, path: '' },
	{ icon: <FaYoutube />, path: '' },
	{ icon: <FaTwitter />, path: '' },
	{ icon: <FaFacebook />, path: '' },
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
					<Link key={index} href={item.path} className={iconStyles}>
						{item.icon}
					</Link>
				);
			})}
		</div>
	);
};

export default Social;
