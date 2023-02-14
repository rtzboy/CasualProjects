const Clock = props => (
	<svg
		{...props}
		fill='none'
		viewBox='0 0 24 24'
		strokeWidth={1.5}
		stroke='currentColor'
		className='h-6 w-6'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z'
		/>
	</svg>
);

export default Clock;
