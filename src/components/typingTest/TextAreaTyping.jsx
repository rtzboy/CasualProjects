import { memo, useState } from 'react';
import useTyping from '../../lib/hooks/useTyping';

import ArrOfLetters from './ArrOfLetters';
import Timer from './clock/Timer';
import GuideMode from './GuideMode';
import TextArea from './TextArea';

const TextAreaTyping = memo(({ valueText, setBtnGenState }) => {
	const { infoTyping, correctLetter, calculateLetter, setResetTextAreaTyping } =
		useTyping(valueText, setBtnGenState);

	const [mode, setMode] = useState(false);

	return (
		<div className='mt-4'>
			<GuideMode
				infoTyping={infoTyping}
				valueText={valueText}
				mode={mode}
				setMode={setMode}
			/>
			<TextArea
				className='cus-shadow focus:cus-shadow-md w-full px-3 py-1 text-center text-lg transition-all disabled:text-slate-400'
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
