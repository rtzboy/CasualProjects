const Letter = ({ value, correctLetter }) => {
	if (correctLetter === true) {
		return <span className='tracking-wide text-green-700'>{value}</span>;
	}
	if (correctLetter === false) {
		return (
			<span className='tracking-wide font-semibold text-red-500'>{value}</span>
		);
	}
	return <span className='text-slate-400 tracking-wide'>{value}</span>;
};

export default Letter;
