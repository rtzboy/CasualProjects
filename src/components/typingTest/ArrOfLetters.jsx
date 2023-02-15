import Letter from './Letter';

const ArrOfLetters = ({ valueText, correctLetter }) => {
	if (!valueText) return;
	return (
		<p className='my-4 overflow-auto text-center text-base'>
			<span className='inline-block rounded-lg bg-slate-100/50 px-4 py-2 shadow-md'>
				{valueText?.split('').map((letter, idx) => {
					return (
						<Letter
							key={idx}
							value={letter}
							correctLetter={correctLetter[idx]}
						/>
					);
				})}
			</span>
		</p>
	);
};

export default ArrOfLetters;
