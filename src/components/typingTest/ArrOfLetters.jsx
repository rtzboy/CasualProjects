import Letter from './Letter';

const ArrOfLetters = ({ valueText, correctLetter }) => {
	if (!valueText) return;
	return (
		<p className='my-4 rounded-lg px-4 py-2 text-base shadow-md'>
			{valueText?.split('').map((letter, idx) => {
				return (
					<Letter key={idx} value={letter} correctLetter={correctLetter[idx]} />
				);
			})}
		</p>
	);
};

export default ArrOfLetters;
