const AuthorInformation = ({ textGenerated }) => {
	if (!textGenerated.info.author) return;
	return (
		<>
			<p className='text-lg my-4'>
				<span className='text-slate-600'>
					{textGenerated.info.author && 'Author: '}{' '}
				</span>
				<span className='text-slate-900 font-semibold'>
					{textGenerated.info.author}
				</span>
			</p>
			<p className='text-lg my-4 italic text-slate-900 rounded-lg bg-white/70 px-4 py-2 cus-shadow'>
				&quot;{textGenerated.info.content}&quot;
			</p>
		</>
	);
};

export default AuthorInformation;
