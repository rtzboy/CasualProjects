const AuthorInformation = ({ textGenerated }) => {
	if (!textGenerated.info.author) return;
	return (
		<>
			<p className='my-4 text-lg'>
				<span className='text-slate-700'>
					{textGenerated.info.author && 'Author: '}{' '}
				</span>
				<span className='font-semibold text-slate-800'>
					{textGenerated.info.author}
				</span>
			</p>
			<p className='my-2 text-center text-lg italic text-slate-900'>
				<span className='inline-block rounded-lg bg-white/50 px-2 py-2 tracking-wide shadow-sm'>
					&quot;{textGenerated.info.content}&quot;
				</span>
			</p>
		</>
	);
};

export default AuthorInformation;
