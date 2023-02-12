import { useEffect, useState } from 'react';

import Letter from './Letter';
import Timer from './Timer';

const TextAreaTyping = ({ valueText }) => {
	const [isEqual, setIsEqual] = useState(false);
	const [greaterThan, setGreaterThan] = useState(false);
	const [value, setValue] = useState(null);
	const [correctLetter, setCorrectLetter] = useState([]);
	const [valueTextSplited, setValueTextSplited] = useState('');
	const [prevValue, setPrevValue] = useState(value);

	useEffect(() => {
		if (value && valueText) {
			if (value.length > 0) setGreaterThan(true);
			if (value?.length === valueText?.length) setIsEqual(true);
		}
	}, [valueText, value]);

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

	return (
		<div>
			<textarea
				className='text-lg outline-none border-2 rounded-md p-2 border-violet-500 resize-none w-full'
				onChange={evt => {
					calculateLetter(evt.target.value);
				}}
				wrap='true'
				rows='5'
				onPaste={evt => evt.preventDefault()}
			></textarea>
			<p className='text-lg'>
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
			<Timer isEqual={isEqual} greater={greaterThan} />
		</div>
	);
};

export default TextAreaTyping;
