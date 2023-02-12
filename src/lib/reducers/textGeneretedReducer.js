const textGeneretedReducer = (state, action) => {
	switch (action.type) {
		case 'startGetQuote':
			return {
				...state,
				loading: true,
				error: false
			};

		case 'setInfoQuote':
			return {
				...state,
				info: action.info,
				loading: false
			};

		case 'setErrQuote':
			return {
				...state,
				loading: false,
				error: action.error
			};

		case 'setResetTextGener':
			return action.INITIAL_INFO;

		default:
			throw new Error('Invalid action type: ' + action.type);
	}
};

export default textGeneretedReducer;
