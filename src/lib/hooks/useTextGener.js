import { useState } from 'react';
import generateText from '../api/api_quote';

const useTextGenereted = () => {
	const [textGenerated, setTextGenerated] = useState({
		info: {
			author: '',
			content: ''
		},
		loading: undefined,
		error: undefined
	});

	const startGetQuote = () => {
		setTextGenerated(prev => ({
			...prev,
			loading: true,
			error: false
		}));
	};

	const setInfoQuote = info => {
		setTextGenerated(prev => ({
			...prev,
			info,
			loading: false
		}));
	};

	const setErrQuote = error => {
		setTextGenerated(prev => ({
			...prev,
			loading: false,
			error
		}));
	};

	const setResetTextGener = () => {
		setTextGenerated({
			info: {
				author: '',
				content: ''
			},
			loading: undefined,
			error: undefined
		});
	};

	return {
		textGenerated,
		setTextAction: {
			startGetQuote,
			setInfoQuote,
			setErrQuote
		},
		setResetTextGener
	};
};

export const loadTextGenerated = async setTextAction => {
	setTextAction.startGetQuote();
	const { success, message, result } = await generateText();
	if (success) {
		setTextAction.setInfoQuote(result);
	} else {
		setTextAction.setErrQuote(message);
	}
};

export default useTextGenereted;
