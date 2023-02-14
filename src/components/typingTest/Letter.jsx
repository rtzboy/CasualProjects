const Letter = ({ value, correctLetter }) => {
	if (correctLetter === true) {
		return <span className='tracking-wider text-green-800'>{value}</span>;
	}
	if (correctLetter === false) {
		return (
			<span className='rounded bg-red-500 font-semibold tracking-wider text-white'>
				{value}
			</span>
		);
	}
	return <span className='tracking-wider text-slate-400'>{value}</span>;
};

export default Letter;
