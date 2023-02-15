const Footer = () => {
	return (
		<footer className='z-50 mt-auto py-6 text-center'>
			<div>
				<span className=''>Made by </span>
				<span className=''>Jhoseph Poma JDev</span>
			</div>
			<ul className='mt-2 flex justify-center gap-5'>
				{SOCIAL_LINKS.map(link => (
					<li key={link.id}>
						<a href={link.link} target='_blank' rel='noreferrer'>
							<span className='text-black-600'>{link.name}</span>
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
		link: 'https://www.facebook.com/joseph.22.12/'
	},
	{
		id: 2,
		name: 'Instagram',
		link: 'https://www.instagram.com/jhoseph2212/'
	},
	{
		id: 3,
		name: 'LinkedIn',
		link: 'https://www.linkedin.com/in/jhoseph-poma-aldave-9b01a01a9/'
	},
	{
		id: 4,
		name: 'Github',
		link: 'https://github.com/rtzboy'
	}
];

export default Footer;
