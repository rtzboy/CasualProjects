import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
	return (
		<footer className='z-50 mt-auto bg-[#F4E2D1] py-6 text-center text-slate-800'>
			<div>
				<span className=''>Made by </span>
				<span className='italic'>Jhoseph Poma </span>
				<span className=''>JPDev</span>
			</div>
			<ul className='mt-2 flex justify-center gap-8 '>
				{SOCIAL_LINKS.map(link => (
					<li key={link.id} className='animate-bounce hover:animate-pulse'>
						<a href={link.link} target='_blank' rel='noreferrer'>
							{link.icon}
						</a>
					</li>
				))}
			</ul>
		</footer>
	);
};

const SOCIAL_LINKS = [
	{
		id: 1,
		name: 'Facebook',
		link: 'https://www.facebook.com/joseph.22.12/',
		icon: <BsFacebook size='1.5rem' />
	},
	{
		id: 2,
		name: 'Instagram',
		link: 'https://www.instagram.com/jhoseph2212/',
		icon: <BsInstagram size='1.5rem' />
	},
	{
		id: 3,
		name: 'LinkedIn',
		link: 'https://www.linkedin.com/in/jhoseph-poma-aldave-9b01a01a9/',
		icon: <BsLinkedin size='1.5rem' />
	},
	{
		id: 4,
		name: 'Github',
		link: 'https://github.com/rtzboy',
		icon: <BsGithub size='1.5rem' />
	}
];

export default Footer;
