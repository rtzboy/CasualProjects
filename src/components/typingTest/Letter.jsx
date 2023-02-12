const Letter = ({ value, correctLetter }) => {
	if (correctLetter === true) {
		return <span className='tracking-widest text-green-800'>{value}</span>;
	}
	if (correctLetter === false) {
		return (
			<span className='tracking-widest font-semibold text-white bg-red-400 rounded'>
				{value}
			</span>
		);
	}
	return <span className='text-slate-300 tracking-widest'>{value}</span>;
};

export default Letter;
