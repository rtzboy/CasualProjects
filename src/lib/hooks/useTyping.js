import { useCallback, useEffect, useState } from 'react';

const useTyping = (valueText, setBtnGenState) => {
	const [isEqual, setIsEqual] = useState(false);
	const [isZero, setIsZero] = useState(false);
	const [value, setValue] = useState('');
	const [correctLetter, setCorrectLetter] = useState([]);
	const [valueTextSplited, setValueTextSplited] = useState('');
	const [prevValue, setPrevValue] = useState(value);

	const calculateLetter = val => {
		setValue(val);
		setValueTextSplited(valueText.slice(0, val.length));
		if (val.length < prevValue?.length) {
			setCorrectLetter(prev => prev.slice(0, -1));
		}
	};

	useEffect(() => {
		setPrevValue(value);
		if (value.length > 0) {
			setIsZero(true);
			setBtnGenState(true);
			if (value.length === valueText.length) setIsEqual(true);
		}
	}, [valueText, value, setBtnGenState]);

	useEffect(() => {
		const textArr = valueTextSplited
			.split('')
			.map((elm, idx) => elm === value.split('')[idx]);
		setCorrectLetter(textArr);
	}, [valueTextSplited, value]);

	const setResetTextAreaTyping = useCallback(() => {
		setIsEqual(false);
		setIsZero(false);
		setValue('');
		setCorrectLetter([]);
		setValueTextSplited('');
		setPrevValue('');
	}, []);

	return {
		infoTyping: {
			isEqual,
			isZero,
			value
		},
		correctLetter,
		calculateLetter,
		setResetTextAreaTyping
	};
};

export default useTyping;
