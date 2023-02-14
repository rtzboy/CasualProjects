import { memo, useState } from 'react';
import useTyping from '../../lib/hooks/useTyping';
import Eye from '../icons/Eye';
import EyeClosed from '../icons/EyeClosed';
import ArrOfLetters from './ArrOfLetters';
import Timer from './clock/Timer';
import TextArea from './TextArea';

const TextAreaTyping = memo(({ valueText, setBtnGenState }) => {
	const { infoTyping, correctLetter, calculateLetter, setResetTextAreaTyping } =
		useTyping(valueText, setBtnGenState);

	const [mode, setMode] = useState(false);

	return (
		<div className='mt-4'>
			<p className='p-2'>
				<button
					disabled={infoTyping.isZero && !infoTyping.isEqual}
					className='inline-block cursor-pointer select-none rounded-md bg-slate-200 p-1 text-slate-800 hover:opacity-90 disabled:opacity-60 hover:disabled:cursor-auto'
					onClick={() => setMode(!mode)}
				>
					{mode ? <Eye /> : <EyeClosed />}
				</button>
			</p>
			<TextArea
				className='cus-shadow focus:cus-shadow-md w-full min-w-[600px] px-3 py-1 text-lg transition-all disabled:text-slate-400'
				disabled={!valueText || infoTyping.isEqual}
				onChange={evt => {
					calculateLetter(evt.target.value);
				}}
				placeholder={valueText && 'Start typing...'}
				value={infoTyping.value || ''}
				onPaste={evt => evt.preventDefault()}
			/>
			<ArrOfLetters
				valueText={mode ? infoTyping.value : valueText}
				correctLetter={correctLetter}
			/>
			<Timer
				correctLetter={correctLetter}
				resetTyping={setResetTextAreaTyping}
				isEqual={infoTyping.isEqual}
				isZero={infoTyping.isZero}
			/>
		</div>
	);
});

TextAreaTyping.displayName = 'Text Area Typing';

export default TextAreaTyping;
