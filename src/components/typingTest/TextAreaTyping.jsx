import { memo } from 'react';
import useTyping from '../../lib/hooks/useTyping';
import ArrOfLetters from './ArrOfLetters';
import TextArea from './TextArea';
import Timer from './Timer';

const TextAreaTyping = memo(({ valueText, setBtnGenState }) => {
	const { infoTyping, correctLetter, calculateLetter, setResetTextAreaTyping } =
		useTyping(valueText, setBtnGenState);

	return (
		<div className='mt-4'>
			<TextArea
				className='disabled:text-slate-400 min-w-[600px] text-lg cus-shadow focus:cus-shadow-md px-3 py-1 w-full transition-all'
				disabled={!valueText || infoTyping.isEqual}
				onChange={evt => {
					calculateLetter(evt.target.value);
				}}
				placeholder={valueText && 'Start typing...'}
				value={infoTyping.value || ''}
				onPaste={evt => evt.preventDefault()}
			/>
			<ArrOfLetters valueText={valueText} correctLetter={correctLetter} />
			<Timer
				resetTyping={setResetTextAreaTyping}
				isEqual={infoTyping.isEqual}
				isZero={infoTyping.isZero}
			/>
		</div>
	);
});

TextAreaTyping.displayName = 'Text Area Typing';

export default TextAreaTyping;
