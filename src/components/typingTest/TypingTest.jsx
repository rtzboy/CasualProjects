import background from '../../assets/bgImage.jpg';
import titleImg from '../../assets/title.png';
import Generate from './Generate';

const TypingTest = () => {
	return (
		<div>
			<img
				src={background}
				alt=''
				className='absolute h-full w-full object-cover opacity-40'
			/>
			<div className='relative z-50 mx-auto max-w-screen-xl px-8 md:mt-[8rem]'>
				<h2 className='py-6 text-center'>
					<img
						className='inline-block w-[200px] md:w-[300px]'
						src={titleImg}
						alt='xd'
					/>
				</h2>
				<Generate />
			</div>
		</div>
	);
};

export default TypingTest;
