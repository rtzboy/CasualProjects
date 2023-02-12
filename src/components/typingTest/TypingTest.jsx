import background from '../../assets/bgImage.jpg';
import Generate from './Generate';

const TypingTest = () => {
	return (
		<div className='w-full h-screen'>
			<img
				src={background}
				alt=''
				className='w-full h-full object-cover opacity-40 absolute'
			/>
			<div className='relative z-50 max-w-screen-xl mx-auto px-8 flex flex-col items-center h-full justify-center'>
				<h1 className='text-2xl mb-4'>Typing Test</h1>
				<Generate />
			</div>
		</div>
	);
};

export default TypingTest;
