const AuthorInformation = ({ textGenerated }) => {
	if (!textGenerated.info.author) return;
	return (
		<>
			<p className='my-4 text-lg'>
				<span className='text-slate-600'>
					{textGenerated.info.author && 'Author: '}{' '}
				</span>
				<span className='font-semibold text-slate-900'>
					{textGenerated.info.author}
				</span>
			</p>
			<p className='cus-shadow my-4 rounded-lg bg-white/70 px-4 py-2 text-lg italic text-slate-900'>
				&quot;{textGenerated.info.content}&quot;
			</p>
		</>
	);
};

export default AuthorInformation;
