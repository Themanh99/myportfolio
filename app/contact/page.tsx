'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt, FaCopy, FaCheck } from 'react-icons/fa';

import { motion } from 'framer-motion';

interface ContactData {
	contact: {
		phone: string;
		phoneRaw: string;
		email: string;
		address: string;
	};
}

const Contact = () => {
	const [contactData, setContactData] = useState<ContactData['contact'] | null>(null);
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		fetch('/data/portfolio-data.json')
			.then((res) => res.json())
			.then((json) => setContactData(json.contact))
			.catch(console.error);
	}, []);

	const handleCopyEmail = async () => {
		if (!contactData) return;
		try {
			await navigator.clipboard.writeText(contactData.email);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch {
			// Fallback for older browsers
			const textArea = document.createElement('textarea');
			textArea.value = contactData.email;
			document.body.appendChild(textArea);
			textArea.select();
			document.execCommand('copy');
			document.body.removeChild(textArea);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		}
	};

	const phone = contactData?.phone ?? '(+84) 345 574 951';
	const phoneRaw = contactData?.phoneRaw ?? '+84345574951';
	const email = contactData?.email ?? 'themanhchu99@gmail.com';
	const address = contactData?.address ?? '66B Trieu Khuc, Tan Trieu, Thanh Tri, Ha Noi';

	const info = [
		{
			icon: <FaPhoneAlt />,
			title: 'Phone',
			description: phone,
			href: `tel:${phoneRaw}`,
		},
		{
			icon: <FaEnvelope />,
			title: 'Email',
			description: email,
			href: `mailto:${email}`,
			copyable: true,
		},
		{
			icon: <FaMapMarkedAlt />,
			title: 'Address',
			description: address,
			href: '',
		},
	];

	return (
		<motion.section
			className="py-6"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { delay: 2.5, duration: 0.4, ease: 'easeIn' } }}
		>
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row gap-[30px]">
					{/* form */}
					<div className="xl:w-[54%] order-2 xl:order-none">
						<form action="" className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
							<h3 className="text-4xl text-accent">Let&apos;s work together</h3>
							<p className="text-white/60">Write here</p>

							{/* input */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<Input type="firstname" placeholder="Firstname" />
								<Input type="lastname" placeholder="Lastname" />
								<Input type="email" placeholder="Email address" />
								<Input type="phone" placeholder="Phone number" />
							</div>

							{/* select */}
							<Select>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Select a service" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Select a service</SelectLabel>
										<SelectItem value="est">Web Development</SelectItem>
										<SelectItem value="cst">UI/UX Design</SelectItem>
										<SelectItem value="mst">Logo Design</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>

							{/* text area */}
							<Textarea className="h-[200px]" placeholder="Type your message here" />

							{/* button */}
							<Button className="max-w-40" size="md">
								Send message
							</Button>
						</form>
					</div>
					{/* info */}
					<div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
						<ul className="flex flex-col gap-10">
							{info.map((item, index) => {
								return (
									<li key={index} className="flex items-center gap-6">
										<div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
											<div className="text-[28px]">{item.icon}</div>
										</div>
										<div className="flex-1">
											<p className="text-white/60">{item.title}</p>
											<div className="flex items-center gap-3">
												{item.href ? (
													<a
														href={item.href}
														className="text-xl hover:text-accent transition-colors duration-300"
														target={item.title === 'Email' ? undefined : undefined}
													>
														{item.description}
													</a>
												) : (
													<h3 className="text-xl">{item.description}</h3>
												)}
												{item.copyable && (
													<button
														onClick={handleCopyEmail}
														className="p-2 rounded-md hover:bg-accent/20 transition-colors duration-300 group"
														title={copied ? 'Copied!' : 'Copy email'}
													>
														{copied ? (
															<FaCheck className="text-accent text-sm" />
														) : (
															<FaCopy className="text-white/40 group-hover:text-accent text-sm transition-colors duration-300" />
														)}
													</button>
												)}
											</div>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default Contact;
