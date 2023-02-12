import { useReducer } from 'react';
import generateText from '../api/api_quote';
import textGeneretedReducer from '../reducers/textGeneretedReducer';

const INITIAL_INFO = {
	info: {
		author: '',
		content: ''
	},
	loading: undefined,
	error: undefined
};

const useTextGenereted = () => {
	const [textGenerated, dispatch] = useReducer(
		textGeneretedReducer,
		INITIAL_INFO
	);

	const startGetQuote = () => dispatch({ type: 'startGetQuote' });

	const setInfoQuote = info => dispatch({ type: 'setInfoQuote', info });

	const setErrQuote = error => dispatch({ type: 'setErrQuote', error });

	const setResetTextGener = () =>
		dispatch({ type: 'setResetTextGener', INITIAL_INFO });

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
