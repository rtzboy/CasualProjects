import Letter from './Letter';

const ArrOfLetters = ({ valueText, correctLetter }) => {
	if (!valueText) return;
	return (
		<p className='cus-shadow my-4 rounded-lg bg-white/70 px-4 py-2 text-lg'>
			{valueText?.split('').map((letter, idx) => {
				return (
					<Letter key={idx} value={letter} correctLetter={correctLetter[idx]} />
				);
			})}
		</p>
	);
};

export default ArrOfLetters;
