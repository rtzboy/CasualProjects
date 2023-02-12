import { memo, useCallback, useEffect, useState } from 'react';

import Letter from './Letter';
import Timer from './Timer';

const TextAreaTyping = memo(({ valueText, setTyping }) => {
	const [isEqual, setIsEqual] = useState(false);
	const [greaterThan, setGreaterThan] = useState(false);
	const [value, setValue] = useState(null);
	const [correctLetter, setCorrectLetter] = useState([]);
	const [valueTextSplited, setValueTextSplited] = useState('');
	const [prevValue, setPrevValue] = useState(value);

	useEffect(() => {
		if (value && valueText) {
			if (value.length > 0) {
				setGreaterThan(true);
				setTyping(true);
			}
			if (value?.length === valueText?.length) setIsEqual(true);
		}
	}, [valueText, value, setTyping]);

	const calculateLetter = val => {
		setValue(val);
		setValueTextSplited(valueText.slice(0, val.length));

		if (val.length < prevValue?.length) {
			setCorrectLetter(prev => prev.slice(0, -1));
		}
	};

	useEffect(() => {
		setPrevValue(value);
	}, [value]);

	useEffect(() => {
		const textArr = valueTextSplited
			.split('')
			.map((elm, idx) => elm === value.split('')[idx]);
		setCorrectLetter(textArr);
	}, [valueTextSplited, value]);

	const setResetTextAreaTyping = useCallback(() => {
		setIsEqual(false);
		setGreaterThan(false);
		setValue(null);
		setCorrectLetter([]);
		setValueTextSplited('');
		setPrevValue(null);
	}, []);

	return (
		<div className='mt-4'>
			<textarea
				className='text-lg outline-none cus-shadow focus:cus-shadow-md px-3 py-1 resize-none w-full transition-all rounded-lg'
				onChange={evt => {
					calculateLetter(evt.target.value);
				}}
				wrap='true'
				rows='3'
				placeholder={valueText && 'Start typing...'}
				value={value || ''}
				onPaste={evt => evt.preventDefault()}
			></textarea>
			<p className='text-lg my-4 rounded-lg bg-white/70 px-4 py-2 cus-shadow'>
				{valueText?.split('').map((letter, idx) => {
					return (
						<Letter
							key={idx}
							value={letter}
							correctLetter={correctLetter[idx]}
						/>
					);
				})}
			</p>
			<Timer
				resetTyping={setResetTextAreaTyping}
				isEqual={isEqual}
				greater={greaterThan}
			/>
		</div>
	);
});

TextAreaTyping.displayName = 'Text Area Typing';

export default TextAreaTyping;
