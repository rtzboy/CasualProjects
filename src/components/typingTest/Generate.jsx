import { useMemo, useState } from 'react';
import { TypingContext } from '../../lib/contexts/typingContext';
import useTextGenereted, {
	loadTextGenerated
} from '../../lib/hooks/useTextGener';
import Button from '../buttons/Button';
import AuthorInformation from './AuthorInformation';
import TextAreaTyping from './TextAreaTyping';

const Generate = () => {
	const { textGenerated, setTextAction, setResetTextGener } =
		useTextGenereted();

	const [btnGenState, setBtnGenState] = useState(false);

	const contextValue = useMemo(
		() => ({
			btnGenState,
			setBtnGenState,
			setResetTextGener
		}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[btnGenState]
	);

	return (
		<>
			<Button
				disabled={textGenerated.loading || btnGenState}
				onClick={() => loadTextGenerated(setTextAction)}
			>
				Generate
			</Button>
			<AuthorInformation textGenerated={textGenerated} />
			<TypingContext.Provider value={contextValue}>
				<TextAreaTyping
					valueText={textGenerated?.info.content}
					setBtnGenState={setBtnGenState}
				/>
			</TypingContext.Provider>
		</>
	);
};

export default Generate;
