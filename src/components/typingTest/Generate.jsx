import { useMemo, useState } from 'react';
import { TypingContext } from '../../lib/contexts/typingContext';
import useTextGenereted, {
	loadTextGenerated
} from '../../lib/hooks/useTextGener';
import Button from '../buttons/Button';
import TextAreaTyping from './TextAreaTyping';

const Generate = () => {
	const { textGenerated, setTextAction, setResetTextGener } =
		useTextGenereted();

	const [typing, setTyping] = useState(false);

	const contextValue = useMemo(
		() => ({
			setTyping,
			setResetTextGener
		}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[typing]
	);

	return (
		<>
			<Button
				disabled={textGenerated.loading || typing}
				onClick={() => loadTextGenerated(setTextAction)}
			>
				Generate
			</Button>
			<p className='text-lg my-4'>
				<span className='text-slate-600'>
					{textGenerated.info.author && 'Author: '}{' '}
				</span>
				<span className='text-slate-900 font-semibold'>
					{textGenerated?.info.author}
				</span>
			</p>
			<p className='text-lg my-4 italic text-slate-900 rounded-lg bg-white/70 px-4 py-2 cus-shadow'>
				{textGenerated?.info.content}
			</p>
			<TypingContext.Provider value={contextValue}>
				<TextAreaTyping
					valueText={textGenerated?.info.content}
					setTyping={setTyping}
				/>
			</TypingContext.Provider>
		</>
	);
};

export default Generate;
