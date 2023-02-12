import useTextGenereted, { loadTextGenerated } from '../lib/hooks/useTextGener';
import TextAreaTyping from './TextAreaTyping';
import Button from './buttons/Button';

const Generate = () => {
	const { textGenerated, setTextAction } = useTextGenereted();

	console.log(textGenerated);
	return (
		<>
			<Button
				disabled={textGenerated.loading}
				onClick={() => loadTextGenerated(setTextAction)}
			>
				Generate
			</Button>
			<p className='text-lg my-1'>
				<span className='text-slate-600'>
					{textGenerated.info.author && 'Author: '}{' '}
				</span>
				<span className='text-slate-900 font-semibold'>
					{textGenerated?.info.author}
				</span>
			</p>
			<p className='text-lg my-1 italic text-slate-900'>
				&quot;{textGenerated?.info.content}&quot;
			</p>
			<TextAreaTyping valueText={textGenerated?.info.content} />
		</>
	);
};

export default Generate;
