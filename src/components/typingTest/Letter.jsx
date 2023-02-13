const Letter = ({ value, correctLetter }) => {
	if (correctLetter === true) {
		return <span className='tracking-widest text-green-800'>{value}</span>;
	}
	if (correctLetter === false) {
		return (
			<span className='rounded bg-red-400 font-semibold tracking-widest text-white'>
				{value}
			</span>
		);
	}
	return <span className='tracking-widest text-slate-300'>{value}</span>;
};

export default Letter;
