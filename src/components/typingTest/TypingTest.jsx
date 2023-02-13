import background from '../../assets/bgImage.jpg';
import Generate from './Generate';

const TypingTest = () => {
	return (
		<div className='h-screen w-full'>
			<img
				src={background}
				alt=''
				className='absolute h-full w-full object-cover opacity-40'
			/>
			<div className='relative z-50 mx-auto flex h-full max-w-screen-xl flex-col items-center justify-center px-8'>
				<h1 className='mb-4 text-2xl'>Typing Test</h1>
				<Generate />
			</div>
		</div>
	);
};

export default TypingTest;
